import kagglehub

# Download the latest version of the dataset
path = kagglehub.dataset_download("andrewmvd/handgun-detection")

print("Path to dataset files:", path)
