#!/bin/bash
IBMCLOUD_URL="https://cloud.ibm.com"
IBMCLOUD_REGION="eu-gb"
IBMCLOUD_RESOURCE_GROUP=Default
IMAGE_URL=uk.icr.io
NAMESPACE=tictactoe_team
APP_NAME=tictactoe_team
IMAGE_TAG=latest
CLUSTER_NAME=xpfarm

# Set secure variables
export $(grep -v '^#' .env | xargs)
