import cv2
import dlib
import numpy as np
import os
from imutils import face_utils
import matplotlib.pyplot as plt

def deepface(link):
    # Dlib의 얼굴 탐지기와 랜드마크 예측기 초기화
    detector = dlib.get_frontal_face_detector()
    predictor = dlib.shape_predictor("/shape_predictor_68_face_landmarks.dat")  # 모델 파일 경로를 직접 지정하세요

    # 이미지 경로 설정
    img_path = '/content/sejin2.jpeg'

    # 이미지 파일이 존재하는지 확인
    if not os.path.exists(img_path):
        print("Image file not found. Please check the path.")
    else:
        # 이미지 로드 및 그레이스케일 변환
        img = cv2.imread(img_path)
        if img is None:
            print("Failed to load image. Please check the file format.")
        else:
            gray = cv2.cvtColor(img, cv2.COLOR_BGR2GRAY)

            # 얼굴 탐지
            rects = detector(gray, 1)

            for (i, rect) in enumerate(rects):
                # 얼굴 랜드마크 추출
                shape = predictor(gray, rect)
                shape = face_utils.shape_to_np(shape)

                # 눈, 코 등 특정 부분의 좌표를 출력
                (x, y, w, h) = face_utils.rect_to_bb(rect)
                cv2.rectangle(img, (x, y), (x + w, y + h), (0, 255, 0), 2)

                for (x, y) in shape:
                    cv2.circle(img, (x, y), 1, (0, 0, 255), -1)

            # 이미지 시각화
            plt.imshow(cv2.cvtColor(img, cv2.COLOR_BGR2RGB))
            plt.axis("off")

            plt.show()

            # 랜드마크로부터 특정 거리나 크기 계산
            left_eye = shape[36:42]
            right_eye = shape[42:48]
            nose = shape[27:36]


            print(f"딥페이스로 얻어낸 shape = {shape}")
            # 예: 눈 사이의 거리 계산
            eye_distance = np.linalg.norm(left_eye[0] - right_eye[3])
            print(f"Eye distance: {eye_distance}")

            # 코 길이 계산 (대략적인 예)
            nose_length = np.linalg.norm(nose[0] - nose[-1])
            print(f"Nose length: {nose_length}")
    return([shape,eye_distance,nose_length])