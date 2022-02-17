import pandas as pd
import numpy as np
from sklearn.neighbors import KNeighborsRegressor
from sklearn.model_selection import train_test_split
import pickle
import os
import sys
os.chdir(sys.path[0])

def wakeup():
    stock_data = pd.read_csv("data/final_set.csv")
    data = []
    for i in stock_data.values:
        if i[2] == "Residential" and i[3] == "Flat":
            data.append(i)

    df = pd.DataFrame(data)
    print(df)
    df.columns = [
        "Latitude",
        "Longitude",
        "Array Type",
        "Market Pricing",
        "Utility-scale Tariff Applied",
        "First Yr Annual (MWh)",
        "Breakeven Price ($/MWh)",
        "Reference Price ($/MWh)",
        "Total Capacity (MW)",
        "Annual",
    ]
    df_feats = df[["Latitude", "Longitude", "Total Capacity (MW)", "Annual"]]
    df_labels = df[["First Yr Annual (MWh)"]]
    feats_train, feats_eval, labels_train, labels_eval = train_test_split(df_feats, df_labels, train_size=0.6, random_state=4)
    model = KNeighborsRegressor(weights="distance")
    model.fit(feats_train, labels_train)
    pickle.dump(model, open("modelState.pkl", "wb"))
    loaded_model = pickle.load(open("modelState.pkl", 'rb'))
    print(type(loaded_model), "loaded model")

    print(type(feats_train))
    prediction = loaded_model.predict(feats_train.iloc[0])
    print(prediction, "pred")

    return "success"

def trainPower(model):



    return True

def trainBrkvn(df):
    return True

def evalPower(lat, long, size, inso):

    pred =0
    return pred

def evalBrkvn(lat, long, size, inso, prod):

    pred = 0
    return pred

def testfunc():
    return "Hello!"