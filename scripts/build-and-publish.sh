#!/bin/bash

# Force script to stop as soon as something fails, rather than continuing
set -eo pipefail

source "./scripts/config/constants.sh"
source "./scripts/utils/ibmcloud.sh"

ibmcloud_login

echo "🔐  Logging into the container registry"
ibmcloud cr login

echo "🧰  Attempting to create namespace"
ibmcloud cr namespace-add $NAMESPACE

echo "🛠  Build image: ${APP_NAME}:${IMAGE_TAG}"
docker build . -t "${APP_NAME}:${IMAGE_TAG}"

echo "🔖  Tagging the docker image"
IMAGE_FULL_TAG="$IMAGE_URL/$NAMESPACE/${APP_NAME}:${IMAGE_TAG}"
docker tag "${APP_NAME}:${IMAGE_TAG}" $IMAGE_FULL_TAG

echo "⏫  Pushing the docker image to the container registry"
docker push $IMAGE_FULL_TAG

echo "🏁  Finished publishing the docker image"
