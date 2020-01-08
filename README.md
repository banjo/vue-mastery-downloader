# Vue Mastery Downloader
Download all your Vue Mastery videos for offline usage.

## Installation
* **Install ffmpeg**
* **(optional) Create a virtual environment**
```bash
# create virtual environment
$ python3 -m venv venv

# activate environment (using bash)
$ source venv/bin/activate
```
* **Install Python packages**
```bash
# install required packages
$ pip install -r requirements.txt
```
* **Install NPM packages**
```bash
# install with npm
$ npm install
```

## Usage
There are two parts you need to do:

### Pick videos
```bash
$ npm run start
```
Start Puppeteer with the command above and play the videos you want to download within the browser. For each video played, the URL will be saved to a file and a console statement will be logged.

## Download
Download the files with Python.
```bash
$ npm run download
# or...
$ npm run download3
```
The files will download to the same folder.
