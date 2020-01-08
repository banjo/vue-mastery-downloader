import youtube_dl
import sys


class MyLogger(object):
    def debug(self, msg):
        pass

    def warning(self, msg):
        pass

    def error(self, msg):
        print(msg)


def my_hook(d):
    if d["status"] == "downloading":
        print(f"{d['status']} - {d['_percent_str'].strip()}",
              end="\r", flush=True)
    if d['status'] == 'finished':
        print('Done downloading, now converting...', end="\r", flush=True)


ydl_opts = {
    'logger': MyLogger(),
    'progress_hooks': [my_hook],
}


def main():

    # read file for urls
    with open("urls.csv") as f:
        content = f.read()

    # split to get all urls
    all_links = content.split(",")

    # Go through each video to download
    for val, link in enumerate(all_links):

        # Download video
        with youtube_dl.YoutubeDL(ydl_opts) as ydl:
            ydl.download([link])

        print("\r", flush=True)


if __name__ == "__main__":
    main()
