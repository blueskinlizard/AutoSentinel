from ultralytics import YOLO
import cv2
import json
import sys

model = YOLO("best-backup-two.pt")
image_path = sys.argv[1]
image = cv2.imread(image_path)
results = model(image)

output = []

for result in results:
    for box in result.boxes:
        detectedObject = {
            "class_id": int(box.cls[0]),
            "confidence": float(box.conf[0]),
            "bbox": [float(coord) for coord in box.xyxy[0]]
        }
        output.append(detectedObject)
print(json.dumps(output))