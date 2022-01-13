df = df.sort_index()
df_train = df.iloc[0: math.floor(df.shape[0] / 3)]
df_eval = df.iloc[(math.floor(df.shape[0] / 3)): df.shape[0]]

feats_train = df_train[["Latitude", "Longitude",
                        "Total Capacity (MW)", "Annual"]]
trainfeatlist = [list(row) for row in feats_train.values]
labels_train = df_train[["First Yr Annual (MWh)"]]
trainlabellist = [list(row) for row in labels_train.values]


feats_eval = df_eval[["Latitude", "Longitude",
                      "Total Capacity (MW)", "Annual"]]
evalfeatlist = [list(row) for row in feats_eval.values]
labels_eval = df_eval[["First Yr Annual (MWh)"]]
evallabellist = [list(row) for row in labels_eval.values]
