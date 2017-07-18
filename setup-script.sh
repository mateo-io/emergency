#!/bin/bash

#server
git pull SERVERURL /home/$USER/express-postgress

#VirtualBox
apt-get update
apt-get install virtualbox-guest-dkms virtualbox-guest-x11 linux-headers-$(uname -r)

#Databases
apt install postgresql

> psql

#Create roles
##todo

#Create db
##todo
create database passport_local_knex;
create database passport_local_knex_test;


#End Databases
