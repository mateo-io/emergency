#!/bin/bash

#VirtualBox
apt-get update
apt-get install virtualbox-guest-dkms virtualbox-guest-x11 linux-headers-$(uname -r)

#Databases
apt install postgresql

#Create roles
##todo

#Create db
##todo

