from ultralytics import YOLO
import cv2
import json
import sys

model = YOLO("../../yoloservice/best-backup-two.pt")
image_path = sys.argv[1]
image = cv2.imread(image_path)
if image is None:
    print(json.dumps([]))
    sys.exit(0)

results = model(image)

output = []

for result in results:
    for box in result.boxes:
        detectedObject = {
            "class_id": int(box.cls[0]),
            "confidence": float(box.conf[0]),
            "bbox": [float(coord) for coord in box.xyxy[0]]
            #bbox is our bounding box coordinate, important for
            #false positive prevention methods
        }
        output.append(detectedObject)
print(json.dumps(output)) 