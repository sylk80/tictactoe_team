function ibmcloud_login () {
  # IBM Cloud API Setup & Login
  if ! [ -x "$(command -v ibmcloud)" ]; then
    echo "ℹ️  IBM Cloud CLI is not installed. Installing..." >&2
    curl -sL https://ibm.biz/idt-installer | bash
  fi

  echo "🔐  Logging into IBMCloud"
  ibmcloud login -a $IBMCLOUD_URL --apikey $IBMCLOUD_APIKEY -r $IBMCLOUD_REGION -g $IBMCLOUD_RESOURCE_GROUP
}
