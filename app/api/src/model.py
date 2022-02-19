import pandas as pd
from sklearn.neighbors import KNeighborsRegressor
from sklearn.model_selection import train_test_split
import pickle
import os
import sys
os.chdir(sys.path[0])

def process(lat, long, size, inso):
    stock_data = pd.read_csv("data/final_set.csv")
    data = []
    types = {
        0.005: "Residential",
        0.2: "Commercial",
        50: "Utility Fixed"
    }
    arrType = types[size]    
    for i in stock_data.values:
        if i[2] == arrType and i[3] == "Flat":
            data.append(i)

    df = pd.DataFrame(data)
    # print(df)
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
    prediction = loaded_model.predict(pd.DataFrame([[lat, long, size, inso]]))

    return prediction[0][0]
