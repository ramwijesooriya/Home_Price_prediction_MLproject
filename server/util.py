import json
import pickle
import numpy as np

__location= None
__data_columns = None
__model = None

def get_estimated_price(location, sqft, bhk, bath):
    try:
     loc_index = __data_columns.index(location.lower()) 
    except:
        loc_index = -1
    x = np.zeros(len(__data_columns))
    x[0] = sqft
    x[1] = bath
    x[2] = bhk
    if loc_index >= 0:
        x[loc_index] = 1


    return round(__model.predict([x])[0] ,2)

def get_location_names():
    return __location

def load_saved_artifacts():

    print("Loading saved artifacts...Start ")
    global __location
    global __data_columns
    global __model

    with open('artifacts/columns.json', 'r') as f:
        __data_columns= json.load(f)['data_columns']
        __location = __data_columns[3:] 

    global __model
    with open('artifacts/home_price_model.pickle', 'rb') as f:
        __model = pickle.load(f)
    print("Loading saved artifacts...Done")    


    # Load the model and other artifacts here
    # For example:
    # __model = joblib.load('model.pkl')
    # __data_columns = joblib.load('data_columns.pkl')
    # __location = joblib.load('location.pkl')

    print("Artifacts loaded successfully")