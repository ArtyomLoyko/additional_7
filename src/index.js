module.exports = function solveSudoku(matrix) {
  var arr = matrix;
  function testForEdges(i1, i2, j1, j2, k1, z1, z2, x1, x2, l1, l2, a1, a2, b1, b2, c1, c2, arr) {
    var missingItems = [1, 2, 3, 4, 5, 6, 7, 8, 9];
    for(i = i1; i < i2; i++) {
      for(j = j1; j < j2; j++) {
        for(k = k1; k < missingItems.length; k++) {
          if( missingItems[k] == arr[i][j] ) {
            missingItems.splice(k, 1);
          }
        }
      }
    }
    for(k = k1; k < missingItems.length; k++) {

      for(z = z1; z < z2; z++) {
        for(x = x1; x < x2; x++) {
          if(arr[z][x] == missingItems[k]) {
            for(l = l1; l < l2; l++) {
              if(!arr[z][l]) arr[z][l] = 11;
            }
          }
        }
      }
      for(z = a1; z < a2; z++) {
        for(x = b1; x < b2; x++) {
          if(arr[x][z] == missingItems[k]) {
            for(l = c1; l < c2; l++) {
              if(!arr[l][z]) arr[l][z] = 11;
            }
          }
        }
      }
      var counter = 0;
      for(z = z1; z < z2; z++) {
        for(l = l1; l < l2; l++) {
          if(!arr[z][l]) counter++;
        }
      }
      for(z = z1; z < z2; z++) {
        for(l = l1; l < l2; l++) {
          if(arr[z][l] == 11) {
            arr[z][l] = 0;
            continue;
          }
          if(counter == 1) {
            if(!arr[z][l]) arr[z][l] = missingItems[k];
          }
        }
      }
    }
  };

  function testForCenters(i1, i2, j1, j2, k1, z1, z2, x1, x2, l1, l2, a1, a2, b1, b2, c1, c2, v1, v2, d1, d2, m1, m2, arr) {
    var missingItems = [1, 2, 3, 4, 5, 6, 7, 8, 9];
    for(i = i1; i < i2; i++) {
      for(j = j1; j < j2; j++) {
        for(k = k1; k < missingItems.length; k++) {
          if( missingItems[k] == arr[i][j] ) {
            missingItems.splice(k, 1);
          }
        }
      }
    }
    for(k = k1; k < missingItems.length; k++) {

      for(z = z1; z < z2; z++) {
        for(x = x1; x < x2; x++) {
          if(arr[x][z] == missingItems[k]) {
            for(l = l1; l < l2; l++) {
              if(!arr[l][z]) arr[l][z] = 10;
            }
          }
        }
      }
      for(z = a1; z < a2; z++) {
        for(x = b1; x < b2; x++) {
          if(arr[x][z] == missingItems[k]) {
            for(l = c1; l < c2; l++) {
              if(!arr[l][z]) arr[l][z] = 10;
            }
          }
        }
      }
      for(z = v1; z < v2; z++) {
        for(x = d1; x < d2; x++) {
          if(arr[z][x] == missingItems[k]) {
            for(l = m1; l < m2; l++) {
              if(!arr[z][l]) arr[z][l] = 10;
            }
          }
        }
      }
      var counter = 0;
      for(z = i1; z < i2; z++) {
        for(l = j1; l < j2; l++) {
          if(!arr[z][l]) counter++;
        }
      }
      for(z = i1; z < i2; z++) {
        for(l = j1; l < j2; l++) {
          if(arr[z][l] == 10) {
            arr[z][l] = 0;
            continue;
          }
          if(counter == 1) {
            if(!arr[z][l]) arr[z][l] = missingItems[k];
          }
        }
      }
    }
  }

  function testForCenters2(i1, i2, j1, j2, k1, z1, z2, x1, x2, l1, l2, a1, a2, b1, b2, c1, c2, v1, v2, d1, d2, m1, m2, arr) {
    var missingItems = [1, 2, 3, 4, 5, 6, 7, 8, 9];
    for(i = i1; i < i2; i++) {
      for(j = j1; j < j2; j++) {
        for(k = k1; k < missingItems.length; k++) {
          if( missingItems[k] == arr[i][j] ) {
            missingItems.splice(k, 1);
          }
        }
      }
    }
    for(k = k1; k < missingItems.length; k++) {

      for(z = z1; z < z2; z++) {
        for(x = x1; x < x2; x++) {
          if(arr[z][x] == missingItems[k]) {
            for(l = l1; l < l2; l++) {
              if(!arr[z][l]) arr[z][l] = 10;
            }
          }
        }
      }
      for(z = a1; z < a2; z++) {
        for(x = b1; x < b2; x++) {
          if(arr[z][x] == missingItems[k]) {
            for(l = c1; l < c2; l++) {
              if(!arr[z][l]) arr[z][l] = 10;
            }
          }
        }
      }
      for(z = v1; z < v2; z++) {
        for(x = d1; x < d2; x++) {
          if(arr[x][z] == missingItems[k]) {
            for(l = m1; l < m2; l++) {
              if(!arr[l][z]) arr[l][z] = 10;
            }
          }
        }
      }
      var counter = 0;
      for(z = i1; z < i2; z++) {
        for(l = j1; l < j2; l++) {
          if(!arr[z][l]) counter++;
        }
      }
      for(z = i1; z < i2; z++) {
        for(l = j1; l < j2; l++) {
          if(arr[z][l] == 10) {
            arr[z][l] = 0;
            continue;
          }
          if(counter == 1) {
            if(!arr[z][l]) arr[z][l] = missingItems[k];
          }
        }
      }
    }
  }

  function testForMainCenter(i1, i2, j1, j2, k1, z1, z2, x1, x2, l1, l2, a1, a2, b1, b2, c1, c2, v1, v2, d1, d2, m1, m2, g1, g2, f1, f2, e1, e2, arr) {
    var missingItems = [1, 2, 3, 4, 5, 6, 7, 8, 9];
    for(i = i1; i < i2; i++) {
      for(j = j1; j < j2; j++) {
        for(k = k1; k < missingItems.length; k++) {
          if( missingItems[k] == arr[i][j] ) {
            missingItems.splice(k, 1);
          }
        }
      }
    }
    for(k = k1; k < missingItems.length; k++) {

      for(z = z1; z < z2; z++) {
        for(x = x1; x < x2; x++) {
          if(arr[z][x] == missingItems[k]) {
            for(l = l1; l < l2; l++) {
              if(!arr[z][l]) arr[z][l] = 10;
            }
          }
        }
      }
      for(z = a1; z < a2; z++) {
        for(x = b1; x < b2; x++) {
          if(arr[z][x] == missingItems[k]) {
            for(l = c1; l < c2; l++) {
              if(!arr[z][l]) arr[z][l] = 10;
            }
          }
        }
      }
      for(z = v1; z < v2; z++) {
        for(x = d1; x < d2; x++) {
          if(arr[x][z] == missingItems[k]) {
            for(l = m1; l < m2; l++) {
              if(!arr[l][z]) arr[l][z] = 10;
            }
          }
        }
      }
      for(z = g1; z < g2; z++) {
        for(x = f1; x < f2; x++) {
          if(arr[x][z] == missingItems[k]) {
            for(l = e1; l < e2; l++) {
              if(!arr[l][z]) arr[l][z] = 10;
            }
          }
        }
      }
      var counter = 0;
      for(z = i1; z < i2; z++) {
        for(l = j1; l < j2; l++) {
          if(!arr[z][l]) counter++;
        }
      }
      for(z = i1; z < i2; z++) {
        for(l = j1; l < j2; l++) {
          if(arr[z][l] == 10) {
            arr[z][l] = 0;
            continue;
          }
          if(counter == 1) {
            if(!arr[z][l]) arr[z][l] = missingItems[k];
          }
        }
      }
    }
  }
  var n = 5;
  while(n > 1) {
    --n;
    testForEdges(0, 3, 0, 3, 0, 0, 3, 3, 9, 0, 3, 0, 3, 3, 9, 0, 3, arr);
    testForEdges(0, 3, 6, 9, 0, 0, 3, 0, 6, 6, 9, 6, 9, 3, 9, 0, 3, arr);
    testForEdges(6, 9, 0, 3, 0, 6, 9, 3, 9, 0, 3, 0, 3, 0, 6, 6, 9, arr);
    testForEdges(6, 9, 6, 9, 0, 6, 9, 0, 6, 6, 9, 6, 9, 0, 6, 6, 9, arr);


    testForCenters(3, 6, 0, 3, 0, 0, 3, 0, 3, 3, 6, 0, 3, 6, 9, 3, 6, 3, 6, 3, 9, 0, 3, arr);
    testForCenters(3, 6, 6, 9, 0, 6, 9, 0, 3, 3, 6, 6, 9, 6, 9, 3, 6, 3, 6, 0, 6, 6, 9, arr);
    testForCenters2(0, 3, 3, 6, 0, 0, 3, 0, 3, 3, 6, 0, 3, 6, 9, 3, 6, 3, 6, 3, 9, 0, 3, arr);
    testForCenters2(6, 9, 3, 6, 0, 6, 9, 0, 3, 3, 6, 6, 9, 6, 9, 3, 6, 3, 6, 0, 6, 6, 9, arr);

    testForMainCenter(3, 6, 3, 6, 0, 3, 6, 0, 3, 3, 6, 3, 6, 6, 9, 3, 6, 3, 6, 0, 3, 3, 6, 3, 6, 6, 9, 3, 6, arr);
  }

  var counter = 0;
  for(i = 0; i < arr.length; i++) {
    for(j = 0; j < arr[i].length; j++) {
       if(!arr[i][j]) counter++;
    }
  }
  if(!counter) return arr;

  var matrix2 = [];
  matrix2.push(arr);

  function testing(arr, matrix2) {

    for(q = 0; q < arr.length; q++) {

      var missingItems = [1, 2, 3, 4, 5, 6, 7, 8, 9];
      for(j = 0; j < arr[q].length; j++) {
        for(z = 0; z < missingItems.length; z++) {
          if(arr[q][j] == missingItems[z]) {
            missingItems.splice(z, 1);
          }
        }
      }
      if(missingItems.length) {
        count = missingItems.length;
        for(g = 0; g < arr[q].length; g++) {
          if(!arr[q][g]) {

            for(o = 0; o < missingItems.length; o++) {

              var array = [[], [], [], [], [], [], [], [], []];
              for(f = 0; f < arr.length; f++) {
                for(p = 0; p < arr[f].length; p++) {
                  array[f][p] = arr[f][p];
                }
              }

              var counter3 = 0;
              for(d = q; d < q + 1; d++) {
                for(k = 0; k < array[q].length; k++) {
                  if(missingItems[o] == array[d][k]) counter3++;
                }
              }
              for(d = j; d < j + 1; d++) {
                for(k = 0; k < array.length; k++) {
                  if(missingItems[o] == array[k][d]) counter3++;
                }
              }

              if(counter3) continue;
              array[q][g] = missingItems[o];

              var counter4 = 0;
              for(i = 0; i < array.length; i++) {
                for(j = 0; j < array[i].length; j++) {
                  if(!array[i][j]) counter4++;
                }
              }

              var n = 5;
              while(n > 1) {
                --n;
                testForEdges(0, 3, 0, 3, 0, 0, 3, 3, 9, 0, 3, 0, 3, 3, 9, 0, 3, array);
                testForEdges(0, 3, 6, 9, 0, 0, 3, 0, 6, 6, 9, 6, 9, 3, 9, 0, 3, array);
                testForEdges(6, 9, 0, 3, 0, 6, 9, 3, 9, 0, 3, 0, 3, 0, 6, 6, 9, array);
                testForEdges(6, 9, 6, 9, 0, 6, 9, 0, 6, 6, 9, 6, 9, 0, 6, 6, 9, array);


                testForCenters(3, 6, 0, 3, 0, 0, 3, 0, 3, 3, 6, 0, 3, 6, 9, 3, 6, 3, 6, 3, 9, 0, 3, array);
                testForCenters(3, 6, 6, 9, 0, 6, 9, 0, 3, 3, 6, 6, 9, 6, 9, 3, 6, 3, 6, 0, 6, 6, 9, array);
                testForCenters2(0, 3, 3, 6, 0, 0, 3, 0, 3, 3, 6, 0, 3, 6, 9, 3, 6, 3, 6, 3, 9, 0, 3, array);
                testForCenters2(6, 9, 3, 6, 0, 6, 9, 0, 3, 3, 6, 6, 9, 6, 9, 3, 6, 3, 6, 0, 6, 6, 9, array);

                testForMainCenter(3, 6, 3, 6, 0, 3, 6, 0, 3, 3, 6, 3, 6, 6, 9, 3, 6, 3, 6, 0, 3, 3, 6, 3, 6, 6, 9, 3, 6, array);
              }

              var counter5 = 0;
              for(i = 0; i < array.length; i++) {
                for(j = 0; j < array[i].length; j++) {
                  if(!array[i][j]) counter4++;
                }
              }
              if(counter4 == counter5) continue;

              matrix2.push(array);

            }
            return;
          }
        }
      }
    }
  };

  for(y = 0; y < matrix2.length; y++) {
    if(y > 100) return;
    testing(matrix2[y], matrix2);
    for(bb = 0; bb < matrix2.length; bb++) {

      var check = true;
      for(t = 0; t < matrix2[bb].length; t++) {
        for(w = 0; w < matrix2[bb][t].length; w++) {
          if(!matrix2[bb][t][w]) check = false;
        }
      }

      var count = 0;
      for(t = 0; t < matrix2[bb].length; t++) {
        var sum = 0;
        for(w = 0; w < matrix2[bb][t].length; w++) {
          sum += matrix2[bb][w][t];
        }
        if(sum == 45) count++;
      }

      if(check && (count == 9)) return matrix2[bb];
    }

  }

}
