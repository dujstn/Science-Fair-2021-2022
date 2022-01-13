startcolor = [0, 255, 0]
endcolor = [255, 0, 0]
scale = 255
steps = len([DATASET].index)

colorlist = []

rdelta = (endcolor[0] - startcolor[0])/steps
gdelta = (endcolor[1] - startcolor[1])/steps
bdelta = (endcolor[2] - startcolor[2])/steps

for i in range(steps):
    colorlist.append((startcolor[0]/scale, startcolor[1]/scale, startcolor[2]/scale))
    startcolor[0] += rdelta
    startcolor[1] += gdelta
    startcolor[2] += bdelta