#!/bin/sh

# Force script to stop as soon as something fails, rather than continuing
set -o pipefail
set -e

source "./scripts/config/constants.sh"
source "scripts/utils/ibmcloud.sh"

TOTAL_WAIT_TIME_IN_SECONDS=1200
FIVE_SECONDS=5

function create_cluster () {
  echo "ℹ️  No clusters found. Creating cluster: $CLUSTER_NAME"
  ibmcloud ks cluster create classic --name $CLUSTER_NAME

  echo "⏱  Waiting for cluster to be ready"
  status=$(ibmcloud ks cluster get -c $CLUSTER_NAME | grep "State:" -m 1)
  while [[ "$status" != *"normal"* && $TOTAL_WAIT_TIME_IN_SECONDS > 0 ]]; do
    sleep $FIVE_SECONDS
    TOTAL_WAIT_TIME_IN_SECONDS=$((TOTAL_WAIT_TIME_IN_SECONDS - $FIVE_SECONDS))
    status=$(ibmcloud ks cluster get -c $CLUSTER_NAME | grep "State:" -m 1)
  done
}

ibmcloud_login

echo "🔍  Searching for active '${CLUSTER_NAME}' Kubernetes cluster"
clusters=$(ibmcloud ks cluster ls | grep $CLUSTER_NAME);
if [ -z "$clusters" ]; then
  create_cluster
else
  echo "✅  Found the $CLUSTER_NAME cluster"
fi

echo "🏁  Finished initialising the environment"
