module.exports = function solveSudoku(matrix) {
  var arr = matrix;
  function testForEdges(i1, i2, j1, j2, k1, z1, z2, x1, x2, l1, l2, a1, a2, b1, b2, c1, c2) {
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

  function testForCenters(i1, i2, j1, j2, k1, z1, z2, x1, x2, l1, l2, a1, a2, b1, b2, c1, c2, v1, v2, d1, d2, m1, m2) {
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

  function testForCenters2(i1, i2, j1, j2, k1, z1, z2, x1, x2, l1, l2, a1, a2, b1, b2, c1, c2, v1, v2, d1, d2, m1, m2) {
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

  function testForMainCenter(i1, i2, j1, j2, k1, z1, z2, x1, x2, l1, l2, a1, a2, b1, b2, c1, c2, v1, v2, d1, d2, m1, m2, g1, g2, f1, f2, e1, e2) {
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
  var n = 10;
  while(n > 1) {
    --n;
    testForEdges(0, 3, 0, 3, 0, 0, 3, 3, 9, 0, 3, 0, 3, 3, 9, 0, 3);
    testForEdges(0, 3, 6, 9, 0, 0, 3, 0, 6, 6, 9, 6, 9, 3, 9, 0, 3);
    testForEdges(6, 9, 0, 3, 0, 6, 9, 3, 9, 0, 3, 0, 3, 0, 6, 6, 9);
    testForEdges(6, 9, 6, 9, 0, 6, 9, 0, 6, 6, 9, 6, 9, 0, 6, 6, 9);

    /*for(i = 0; i < arr.length; i++) {
      var missingItems = [1, 2, 3, 4, 5, 6, 7, 8, 9];
      var indicesEmptyEl = [];
      for(j = 0; j < arr[i].length; j++) {
        var test = false;
        for(k = 0; k < missingItems.length; k++) {
          if( missingItems[k] == arr[i][j] ) {
            missingItems.splice(k, 1);
            test = true;
          };
        };
        if(!test) indicesEmptyEl.push(j);
      };

      for(j = 0; j < indicesEmptyEl.length; j++) {

        var trueEl = [];
        for(k = 0; k < missingItems.length; k++) {

          var counter = 0;

          var counterForColumn = 0;
          for(l = 1; l < arr.length; l++) {
            if(arr[l][indicesEmptyEl[j]] == missingItems[k]) break;
            if(arr[l][indicesEmptyEl[j]] != missingItems[k]) counterForColumn++;
          };
          if(counterForColumn == 8) counter++;

          if(indicesEmptyEl[j] < 3 && i < 3) {
            var state = true;
            for(l = 0; l < 3; l++) {
              for(r = 0; r < 3; r++) {
                if(arr[l][r] == missingItems[k]) state = false;
              };
            };
            if(state) counter++;
          };

          if( (indicesEmptyEl[j] > 2 && indicesEmptyEl[j] < 6) && i < 3) {
            var state = true;
            for(l = 0; l < 3; l++) {
              for(r = 3; r < 6; r++) {
                if(arr[l][r] == missingItems[k]) state = false;
              };
            };
            if(state) counter++;
          };

          if(indicesEmptyEl[j] > 5 && i < 3) {
            var state = true;
            for(l = 0; l < 3; l++) {
              for(r = 6; r < 9; r++) {
                if(arr[l][r] == missingItems[k]) state = false;
              };
            };
            if(state) counter++;
          };

          if( indicesEmptyEl[j] < 3 && (i > 2 && i < 6) ) {
            var state = true;
            for(l = 3; l < 6; l++) {
              for(r = 0; r < 3; r++) {
                if(arr[l][r] == missingItems[k]) state = false;
              };
            };
            if(state) counter++;
          };

          if( (indicesEmptyEl[j] > 2 && indicesEmptyEl[j] < 6) && (i > 2 && i < 6) ) {
            var state = true;
            for(l = 3; l < 6; l++) {
              for(r = 3; r < 6; r++) {
                if(arr[l][r] == missingItems[k]) state = false;
              };
            };
            if(state) counter++;
          };

          if(indicesEmptyEl[j] > 5 && (i > 2 && i < 6) ) {
            var state = true;
            for(l = 3; l < 6; l++) {
              for(r = 6; r < 9; r++) {
                if(arr[l][r] == missingItems[k]) state = false;
              };
            };
            if(state) counter++;
          };

          if(indicesEmptyEl[j] < 3 && i > 5) {
            var state = true;
            for(l = 6; l < 9; l++) {
              for(r = 0; r < 3; r++) {
                if(arr[l][r] == missingItems[k]) state = false;
              };
            };
            if(state) counter++;
          };

          if( (indicesEmptyEl[j] > 2 && indicesEmptyEl[j] < 6) && i > 5) {
            var state = true;
            for(l = 6; l < 9; l++) {
              for(r = 3; r < 6; r++) {
                if(arr[l][r] == missingItems[k]) state = false;
              };
            };
            if(state) counter++;
          };

          if(indicesEmptyEl[j] > 5 && i > 5) {
            var state = true;
            for(l = 6; l < 9; l++) {
              for(r = 6; r < 9; r++) {
                if(arr[l][r] == missingItems[k]) state = false;
              };
            };
            if(state) counter++;
          };

          if(counter == 2) trueEl.push(missingItems[k]);
        };

        if(trueEl.length == 1) arr[i][indicesEmptyEl[j]] = trueEl[0];
      };
    };*/

    testForCenters(3, 6, 0, 3, 0, 0, 3, 0, 3, 3, 6, 0, 3, 6, 9, 3, 6, 3, 6, 3, 9, 0, 3);
    testForCenters(3, 6, 6, 9, 0, 6, 9, 0, 3, 3, 6, 6, 9, 6, 9, 3, 6, 3, 6, 0, 6, 6, 9);
    testForCenters2(0, 3, 3, 6, 0, 0, 3, 0, 3, 3, 6, 0, 3, 6, 9, 3, 6, 3, 6, 3, 9, 0, 3);
    testForCenters2(6, 9, 3, 6, 0, 6, 9, 0, 3, 3, 6, 6, 9, 6, 9, 3, 6, 3, 6, 0, 6, 6, 9);

    testForMainCenter(3, 6, 3, 6, 0, 3, 6, 0, 3, 3, 6, 3, 6, 6, 9, 3, 6, 3, 6, 0, 3, 3, 6, 3, 6, 6, 9, 3, 6);
  }

  var counter = 0;
  for(i = 0; i < arr.length; i++) {
    for(j = 0; j < arr[i].length; j++) {
       if(!arr[i][j]) counter++;
    }
  }
  if(!counter) return arr;

  var arr2 = [[], [], [], [], [], [], [], [], []];
  for(i = 0; i < arr.length; i++) {
    for(j = 0; j < arr[i].length; j++) {
      arr2[i][j] = arr[i][j];
    }
  }

  (function testing(arr, arr2) {

    for(i = 0; i < arr.length; i++) {

      var missingItems = [1, 2, 3, 4, 5, 6, 7, 8, 9];
      for(j = 0; j < arr[i].length; j++) {
        for(z = 0; z < missingItems.length; z++) {
          if(arr[i][j] == missingItems[z]) {
            missingItems.splice(z, 1);
          }
        }
      }
      if(missingItems.length) {
        for(j = 0; j < arr[i].length; j++) {
          if(!arr[i][j]) {

            for(z = 0; z < missingItems.length; z++) {
              arr[i][j] = missingItems[z];

              var counter1 = 0;
              for(i = 0; i < arr.length; i++) {
                for(j = 0; j < arr[i].length; j++) {
                   if(!arr[i][j]) counter1++;
                }
              }
              var n = 10;
              while(n > 1) {
                --n;
                testForEdges(0, 3, 0, 3, 0, 0, 3, 3, 9, 0, 3, 0, 3, 3, 9, 0, 3);
                testForEdges(0, 3, 6, 9, 0, 0, 3, 0, 6, 6, 9, 6, 9, 3, 9, 0, 3);
                testForEdges(6, 9, 0, 3, 0, 6, 9, 3, 9, 0, 3, 0, 3, 0, 6, 6, 9);
                testForEdges(6, 9, 6, 9, 0, 6, 9, 0, 6, 6, 9, 6, 9, 0, 6, 6, 9);

                testForCenters(3, 6, 0, 3, 0, 0, 3, 0, 3, 3, 6, 0, 3, 6, 9, 3, 6, 3, 6, 3, 9, 0, 3);
                testForCenters(3, 6, 6, 9, 0, 6, 9, 0, 3, 3, 6, 6, 9, 6, 9, 3, 6, 3, 6, 0, 6, 6, 9);
                testForCenters2(0, 3, 3, 6, 0, 0, 3, 0, 3, 3, 6, 0, 3, 6, 9, 3, 6, 3, 6, 3, 9, 0, 3);
                testForCenters2(6, 9, 3, 6, 0, 6, 9, 0, 3, 3, 6, 6, 9, 6, 9, 3, 6, 3, 6, 0, 6, 6, 9);

                testForMainCenter(3, 6, 3, 6, 0, 3, 6, 0, 3, 3, 6, 3, 6, 6, 9, 3, 6, 3, 6, 0, 3, 3, 6, 3, 6, 6, 9, 3, 6);
              }

              var counter2 = 0;
              for(i = 0; i < arr.length; i++) {
                for(j = 0; j < arr[i].length; j++) {
                   if(!arr[i][j]) counter2++;
                }
              }

              /*if( counter2 &&  !(counter1 - counter2) ) {
                var arr = [[], [], [], [], [], [], [], [], []];
                for(i = 0; i < arr2.length; i++) {
                  for(j = 0; j < arr2[i].length; j++) {
                    arr[i][j] = arr2[i][j];
                  }
                }
                continue;
              }*/if (counter2) {
                return testing(arr, arr2);
              } else {

                return arr;
              }
            }
          }
        }
      }
    }
  })(arr, arr2);
  return arr;
}
