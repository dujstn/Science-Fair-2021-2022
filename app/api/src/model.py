import pandas as pd
import numpy as np
from sklearn.neighbors import KNeighborsRegressor
from sklearn.model_selection import train_test_split
import os
import sys
os.chdir(sys.path[0])

def wakeup():
    print(os.getcwd())
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