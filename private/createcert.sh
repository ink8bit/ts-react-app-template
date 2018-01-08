#!/bin/sh

MY_PRIVATE_KEY=$(pwd)'/private/my.key.pem'
MY_CERTIFICATE=$(pwd)'/private/my.cert.pem'
MY_CONFIG_FILE=$(pwd)'/private/openssl.conf'
VALID_DAYS=1

echo 📜 GENERATING CERTIFICATE:
openssl req \
  -config $MY_CONFIG_FILE \
  -new -x509 -sha256 \
  -newkey rsa:2048 \
  -days $VALID_DAYS \
  -keyout $MY_PRIVATE_KEY \
  -out $MY_CERTIFICATE