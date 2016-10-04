import os, sys
import zipfile
import tensorflow as tf

# If the file is not present in the current directory, downloads 
# file from the url and verifies if the size of downloaded
# file matches the expected size
def maybe_download(filename, url, expected_bytes):
  """Download a file if not present, and make sure it's the right size."""
  if not os.path.exists(filename):
    filename, _ = urllib.request.urlretrieve(url + filename, filename)
  statinfo = os.stat(filename)
  if statinfo.st_size == expected_bytes:
    print('Found and verified', filename)
  else:
    print(statinfo.st_size)
    raise Exception(
        'Failed to verify ' + filename + '. Can you get to it with a browser?')
  return filename

# Read the data into a list of strings.
def read_data_from_zip(filename):
  """Extract the first file enclosed in a zip file as a list of words"""
  with zipfile.ZipFile(filename) as f:
    data = tf.compat.as_str(f.read(f.namelist()[0])).split()
  return data

def read_data(filename):
  """Read data from file"""
  with open(filename, 'rb+') as f:
    data = tf.compat.as_str(f.read(f.namelist()[0])).split()
  return data
