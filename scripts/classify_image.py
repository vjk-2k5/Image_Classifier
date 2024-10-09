import matplotlib.pyplot as plt
import numpy as np
import PIL
import tensorflow as tf

from tensorflow import keras
from tensorflow.keras import layers
from tensorflow.keras.models import Sequential

batch_size = 32
img_height = 180
img_width = 180

sample_img_path='../samples/sample8.jpeg'

img = tf.keras.utils.load_img(
    sample_img_path, target_size=(img_height, img_width)
)
img_array = tf.keras.utils.img_to_array(img)
img_array = tf.expand_dims(img_array, 0)

TF_MODEL_FILE_PATH = '../models/model.tflite'

interpreter = tf.lite.Interpreter(model_path=TF_MODEL_FILE_PATH)
interpreter.get_signature_list()

classify_lite = interpreter.get_signature_runner('serving_default')
class_names=['daisy', 'dandelion', 'roses', 'sunflowers', 'tulips']
predictions_lite = classify_lite(keras_tensor=img_array)['output_0']
score_lite = tf.nn.softmax(predictions_lite)

# TODO CHECK whether to return or print
print(
    "This image most likely belongs to {} with a {:.2f} percent confidence."
    .format(class_names[np.argmax(score_lite)], 100 * np.max(score_lite))
)