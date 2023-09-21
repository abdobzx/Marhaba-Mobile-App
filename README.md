
# MARHABA App Usage Guide

Welcome to MARHABA! Follow these steps to set up and run the app on your local environment.

## Step 1: Clone the Repository

Clone the MARHABA repository to your local machine:

```bash
git clone https://github.com/abdobzx/MARHABA.git
```

## Step 2: Configure Local Server

Set your local server's static IP to `192.168.11.101`:

- Open the Control Panel.
- Navigate to Network and Sharing Center.
- Click on Change adapter settings.
- Right-click on your network connection and select Properties.
- Select Internet Protocol Version 4 (TCP/IPv4) and click Properties.
- Choose 'Use the following IP address' and set the IP to `192.168.11.101`.

![Network Settings](images/network_settings.png)

## Step 3: Install MySQL

Download MySQL from the official link [here](https://dev.mysql.com/downloads/installer/). During installation, make sure to select Workbench for easier management.

## Step 4: Set MySQL Root Password

Set the root user password to "Azerty+123" or any other secure password of your choice.

## Step 5: Create Database Schema

Create a new database schema named "touristique" in MySQL. You can choose a different name, but remember to update the backend configuration file if you do.

## Step 6: Run the Servers

Navigate to the backend directory and start the server:

```bash
cd server
npm start
```

Next, go to the frontend directory and start the React Native app:

```bash
cd mobile
npm start
```

You're all set! MARHABA is now running on your local environment. Open the app on your emulator or physical device to start exploring.
