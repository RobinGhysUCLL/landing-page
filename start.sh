#!/bin/bash
set -e

# Configuratie
BUILD_NUMBER=$(date +%s)
APP_NAME="robinghys-landing-page"
PORT=3512
MAX_RETRIES=30
RETRY_INTERVAL=2


# Pull latest changes
git pull

# Build nieuwe container met uniek label
CONTAINER_NAME="${APP_NAME}-${BUILD_NUMBER}"
docker compose build

# Start nieuwe container
BUILD_NUMBER=$BUILD_NUMBER docker compose up -d

# Wacht tot nieuwe container ECHT ready is
retries=0
while [ $retries -lt $MAX_RETRIES ]; do
    if curl -s "http://localhost:${PORT}" > /dev/null; then
        
        # Stop oude containers pas als nieuwe werkt
        docker ps -a | grep "^.*${APP_NAME}-[0-9]\+" | grep -v "${APP_NAME}-${BUILD_NUMBER}" | while read -r container; do
            CONTAINER_ID=$(echo "$container" | awk '{print $1}')
            echo "Stopping container $CONTAINER_ID..."
            docker stop $CONTAINER_ID --time 30
            docker rm $CONTAINER_ID
        done
        
        exit 0
    fi
    
    sleep $RETRY_INTERVAL
    retries=$((retries + 1))
done

# Als we hier komen, is de nieuwe container niet gezond
docker logs "${APP_NAME}-${BUILD_NUMBER}"
docker stop "${APP_NAME}-${BUILD_NUMBER}"
docker rm "${APP_NAME}-${BUILD_NUMBER}"
exit 1