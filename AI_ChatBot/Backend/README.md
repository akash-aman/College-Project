## Python-Chatbot with React-FrontEnd

# Use python 3.8 ( because tensorflow will not work on 3.9 )

Creating a simple Python chatbot using natural language processing and deep learning.

train_chatbot.py — the code for reading in the natural language data into a training set and using a Keras sequential neural network to create a model


chatgui.py — the code for cleaning up the responses based on the predictions from the model and creating a graphical interface for interacting with the chatbot

classes.pkl — a list of different types of classes of responses

words.pkl — a list of different words that could be used for pattern recognition

intents.json — abunch of JavaScript objects that lists different tags that correspond to different types of word patterns

chatbot_model.h5 — the actual model created by train_chatbot.py and used by chatgui.py


# Steps :-

install tensorflow , keras , numpy ( pip install numpy==1.19.3 )

(1) Compile train_chat.py ( if giving missing module error , install the missing library )
(2) Compile chatbot.py ( project will start running on local host )

Run front End and Enjoy Chatbot 