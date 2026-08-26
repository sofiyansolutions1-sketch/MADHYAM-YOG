import urllib.request
from PIL import Image
import imagehash
import os
import re

gallery_file = "src/components/GallerySection.tsx"
with open(gallery_file, "r") as f:
    content = f.read()

urls = re.findall(r'url:\s*"(.*?)"', content)

# Load target image
target = Image.open("../image.png")
target_hash = imagehash.phash(target)

for url in urls:
    try:
        urllib.request.urlretrieve(url, "temp.jpg")
        img = Image.open("temp.jpg")
        img_hash = imagehash.phash(img)
        diff = target_hash - img_hash
        print(f"URL: {url} -> diff: {diff}")
    except Exception as e:
        print(f"Error with {url}: {e}")
