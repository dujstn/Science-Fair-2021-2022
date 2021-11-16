import pandas as pd
import numpy as np
import math
from sklearn.neighbors import KNeighborsRegressor
from sklearn.metrics import mean_absolute_error
from sklearn.model_selection import GridSearchCV
import matplotlib.pyplot as plt

stock_data = pd.read_csv("Datasets/final_set.csv")

data = []

for i in stock_data.values:
    if i[8] == "Residential":
        data.append(i)
df = pd.DataFrame(data)
df.columns = [
    "Municipality",
    "Latitude",
    "Longitude",
    "CGNDB ID",
    "Generic Term",
    "Province - Territory",
    "Nearest NSRDB latitude",
    "Nearest NSRDB longitude",
    "Array Type",
    "Market Pricing",
    "Tariff Applied",
    "First Yr Annual (MWh)",
    "First Yr Winter (MWh)",
    "First Yr Spring (MWh)",
    "First Yr Summer (MWh)",
    "First Yr Fall (MWh)",
    "Installation Cost Scenario",
    "Breakeven Price ($/MWh)",
    "Reference Price ($/MWh)",
    "Breakeven Price (¢/kWh)",
    "Reference Price (¢/kWh)",
    "Total Capacity (MW)",
    "Annual",
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
]

df_train = df.iloc[0 : math.floor(df.shape[0] / 2)]
df_eval = df.iloc[(math.floor(df.shape[0] / 2)) : df.shape[0]]


feats_train = df_train[["Latitude", "Longitude", "Total Capacity (MW)", "Annual"]]
trainfeatlist = [list(row) for row in feats_train.values]
labels_train = df_train[["First Yr Annual (MWh)"]]
trainlabellist = [list(row) for row in labels_train.values]


feats_eval = df_eval[["Latitude", "Longitude", "Total Capacity (MW)", "Annual"]]
evalfeatlist = [list(row) for row in feats_eval.values]
labels_eval = df_eval[["First Yr Annual (MWh)"]]
evallabellist = [list(row) for row in labels_eval.values]

model = KNeighborsRegressor()
knn_grid = {"n_neighbors": np.arange(1, 10)}
model_knn = GridSearchCV(model, knn_grid, cv=10)
model_knn.fit(trainfeatlist, trainlabellist)
print("Best K Value: ", model_knn.best_params_)
print("R^2 - Training: ", model_knn.best_score_)
output = model_knn.predict(evalfeatlist)
print(
    "\n\nAverage Error % (Evaluation, K = 1): ",
    mean_absolute_error(evallabellist, output),
)
print("R^2 - Evaluation: ", model_knn.score(evalfeatlist, evallabellist))
print(model_knn.cv_results_)

p = [1, 2, 3, 4, 5, 6, 7, 8, 9]
zero = model_knn.cv_results_["split0_test_score"]
one = model_knn.cv_results_["split1_test_score"]
two = model_knn.cv_results_["split2_test_score"]
three = model_knn.cv_results_["split3_test_score"]
four = model_knn.cv_results_["split4_test_score"]
five = model_knn.cv_results_["split5_test_score"]
six = model_knn.cv_results_["split6_test_score"]
seven = model_knn.cv_results_["split7_test_score"]
eight = model_knn.cv_results_["split8_test_score"]
nine = model_knn.cv_results_["split9_test_score"]
splits = [zero, one, two, three, four, five, six, seven, eight, nine]

for i in range(len(splits)):
    plt.plot(p, splits[i], "-o", label="Number of Splits: " + str(i))
plt.xlabel("K Value", fontsize=30)
plt.ylabel("R-Squared Value", fontsize=30)
plt.title("R-Squared Values - Power Production (Various Splits)", fontsize=30)
plt.legend()
plt.show()

actuallist = [item for sublist in evallabellist for item in sublist]
predlist = [item for sublist in output for item in sublist]

testlist = {"Actual": actuallist, "Prediction": predlist}
testframe = pd.DataFrame(testlist)
print(testframe.head())
testframe.to_csv("check.csv")
