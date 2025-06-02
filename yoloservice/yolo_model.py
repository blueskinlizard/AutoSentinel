from ultralytics import YOLO
import cv2
import json
import sys

model = YOLO("../../yoloservice/best-backup-two.pt")
image_path = sys.argv[1]
print(f"Attempting to read image from: {image_path}", file=sys.stderr)
image = cv2.imread(image_path)
if image is None:
    print(json.dumps([]))
    sys.exit(0)

try:
    results = model(image, conf=0.5)
except Exception as error:
    print(f"Model inference failed: {error}", file=sys.stderr)
    sys.exit(1)

output = []

for result in results:
    for box in result.boxes:
        detectedObject = {
            "class_id": int(box.cls[0]),
            "confidence": box.conf.item(),
            "bbox": [float(coord) for coord in box.xyxy[0]],
            #bbox is our bounding box coordinate, important for false positive prevention methods
            "path": image_path
        }
        output.append(detectedObject)

if output:
    print(json.dumps(output))
else:
    print(json.dumps([]))