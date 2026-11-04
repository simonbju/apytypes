window.BENCHMARK_DATA = {
  "lastUpdate": 1793781568432,
  "repoUrl": "https://github.com/simonbju/apytypes",
  "entries": {
    "APyTypes Fixed-Point Array Benchmarks": [
      {
        "commit": {
          "author": {
            "email": "theodor.lindberg.se@gmail.com",
            "name": "Theodor Lindberg",
            "username": "Theodor-Lindberg"
          },
          "committer": {
            "email": "40732757+Theodor-Lindberg@users.noreply.github.com",
            "name": "Theodor-Lindberg",
            "username": "Theodor-Lindberg"
          },
          "distinct": true,
          "id": "0101f01f84c89f7a2144c460f108fc720fd6e14e",
          "message": "Fix apy.from_bits for APyCFloat",
          "timestamp": "2026-11-03T08:26:00+01:00",
          "tree_id": "3b4fb29205fe64b0546ebd1597bc64ff66e83581",
          "url": "https://github.com/simonbju/apytypes/commit/0101f01f84c89f7a2144c460f108fc720fd6e14e"
        },
        "date": 1793781373102,
        "tool": "pytest",
        "benches": [
          {
            "name": "benchmark/ci_fixed_array_benchmarks.py::test_fixed_matrix_multiplication_20",
            "value": 252077.26788112207,
            "unit": "iter/sec",
            "range": "stddev: 0.0000011034574787850863",
            "extra": "mean: 3.967037600834333 usec\nrounds: 138428"
          },
          {
            "name": "benchmark/ci_fixed_array_benchmarks.py::test_fixed_matrix_multiplication_medium_20",
            "value": 113703.78534772487,
            "unit": "iter/sec",
            "range": "stddev: 0.00000120075893020638",
            "extra": "mean: 8.794781958593862 usec\nrounds: 110291"
          },
          {
            "name": "benchmark/ci_fixed_array_benchmarks.py::test_fixed_matrix_addition_20",
            "value": 2685769.6861415803,
            "unit": "iter/sec",
            "range": "stddev: 6.288895022665984e-8",
            "extra": "mean: 372.33274511956233 nsec\nrounds: 189394"
          },
          {
            "name": "benchmark/ci_fixed_array_benchmarks.py::test_fixed_matrix_addition_200",
            "value": 58779.049832198245,
            "unit": "iter/sec",
            "range": "stddev: 0.0000021881970396943515",
            "extra": "mean: 17.012864325891424 usec\nrounds: 37568"
          },
          {
            "name": "benchmark/ci_fixed_array_benchmarks.py::test_fixed_matrix_addition_long_200",
            "value": 7003.7230951323945,
            "unit": "iter/sec",
            "range": "stddev: 0.000005881992504700699",
            "extra": "mean: 142.7812017146998 usec\nrounds: 1983"
          },
          {
            "name": "benchmark/ci_fixed_array_benchmarks.py::test_fixed_matrix_addition_different_wl_long_200",
            "value": 664.5160392333629,
            "unit": "iter/sec",
            "range": "stddev: 0.00003816786096155215",
            "extra": "mean: 1.5048545722894473 msec\nrounds: 664"
          },
          {
            "name": "benchmark/ci_fixed_array_benchmarks.py::test_fixed_matrix_addition_20_different_wl",
            "value": 2631442.8841585424,
            "unit": "iter/sec",
            "range": "stddev: 6.223027860518868e-8",
            "extra": "mean: 380.0196485434151 nsec\nrounds: 193424"
          },
          {
            "name": "benchmark/ci_fixed_array_benchmarks.py::test_fixed_matrix_addition_200_different_wl",
            "value": 59463.97000281069,
            "unit": "iter/sec",
            "range": "stddev: 0.000002148317960495387",
            "extra": "mean: 16.816906102178056 usec\nrounds: 37413"
          },
          {
            "name": "benchmark/ci_fixed_array_benchmarks.py::test_fixed_matrix_elementwise_multiplication_20",
            "value": 2200764.891462986,
            "unit": "iter/sec",
            "range": "stddev: 7.311757720966864e-8",
            "extra": "mean: 454.3874740455522 nsec\nrounds: 186220"
          },
          {
            "name": "benchmark/ci_fixed_array_benchmarks.py::test_fixed_matrix_elementwise_multiplication_200",
            "value": 59194.80523327924,
            "unit": "iter/sec",
            "range": "stddev: 0.000002207965167897871",
            "extra": "mean: 16.89337427598801 usec\nrounds: 42295"
          },
          {
            "name": "benchmark/ci_fixed_array_benchmarks.py::test_fixed_matrix_elementwise_division_20",
            "value": 528021.7509699758,
            "unit": "iter/sec",
            "range": "stddev: 1.608205526421167e-7",
            "extra": "mean: 1.8938613762842158 usec\nrounds: 53405"
          },
          {
            "name": "benchmark/ci_fixed_array_benchmarks.py::test_fixed_matrix_elementwise_division_200",
            "value": 6186.9730857625,
            "unit": "iter/sec",
            "range": "stddev: 0.000005205343023852406",
            "extra": "mean: 161.6299256741889 usec\nrounds: 6189"
          },
          {
            "name": "benchmark/ci_fixed_array_benchmarks.py::test_fixed_matrix_elementwise_division_medium_20",
            "value": 470881.6133539882,
            "unit": "iter/sec",
            "range": "stddev: 3.038522088222361e-7",
            "extra": "mean: 2.1236760400925734 usec\nrounds: 156471"
          },
          {
            "name": "benchmark/ci_fixed_array_benchmarks.py::test_fixed_matrix_elementwise_division_medium_200",
            "value": 2405.7949760802862,
            "unit": "iter/sec",
            "range": "stddev: 0.000009533765703372405",
            "extra": "mean: 415.66301781429445 usec\nrounds: 2470"
          },
          {
            "name": "benchmark/ci_fixed_array_benchmarks.py::test_fixed_matrix_elementwise_division_long_20",
            "value": 25133.853246019076,
            "unit": "iter/sec",
            "range": "stddev: 0.0000025900938657373325",
            "extra": "mean: 39.78697536790898 usec\nrounds: 24805"
          },
          {
            "name": "benchmark/ci_fixed_array_benchmarks.py::test_fixed_matrix_elementwise_multiplication_medium_20",
            "value": 1315394.6962378826,
            "unit": "iter/sec",
            "range": "stddev: 9.835184195842119e-8",
            "extra": "mean: 760.2280918876041 nsec\nrounds: 132031"
          },
          {
            "name": "benchmark/ci_fixed_array_benchmarks.py::test_fixed_matrix_elementwise_multiplication_medium_200",
            "value": 20452.32715310356,
            "unit": "iter/sec",
            "range": "stddev: 0.00000349464634877866",
            "extra": "mean: 48.894191478266755 usec\nrounds: 19104"
          },
          {
            "name": "benchmark/ci_fixed_array_benchmarks.py::test_fixed_matrix_negation_20",
            "value": 3112589.0974912834,
            "unit": "iter/sec",
            "range": "stddev: 5.3984201115301324e-8",
            "extra": "mean: 321.27594381346074 nsec\nrounds: 194213"
          },
          {
            "name": "benchmark/ci_fixed_array_benchmarks.py::test_fixed_matrix_negation_200",
            "value": 80745.86392252757,
            "unit": "iter/sec",
            "range": "stddev: 0.0000018624742450017074",
            "extra": "mean: 12.384535274270645 usec\nrounds: 56812"
          },
          {
            "name": "benchmark/ci_fixed_array_benchmarks.py::test_fixed_matrix_negation_20_long",
            "value": 825426.0573308581,
            "unit": "iter/sec",
            "range": "stddev: 1.396511138888111e-7",
            "extra": "mean: 1.2114955556814544 usec\nrounds: 82217"
          },
          {
            "name": "benchmark/ci_fixed_array_benchmarks.py::test_fixed_matrix_negation_200_long",
            "value": 8531.282551023118,
            "unit": "iter/sec",
            "range": "stddev: 0.000007515717041414422",
            "extra": "mean: 117.2156699791961 usec\nrounds: 6139"
          },
          {
            "name": "benchmark/ci_fixed_array_benchmarks.py::test_fixed_matrix_abs_20",
            "value": 3278184.7592646093,
            "unit": "iter/sec",
            "range": "stddev: 4.705056305434035e-8",
            "extra": "mean: 305.04686997090687 nsec\nrounds: 193799"
          },
          {
            "name": "benchmark/ci_fixed_array_benchmarks.py::test_fixed_matrix_abs_200",
            "value": 82519.16159042052,
            "unit": "iter/sec",
            "range": "stddev: 0.0000018221532717890441",
            "extra": "mean: 12.118397481586724 usec\nrounds: 66944"
          },
          {
            "name": "benchmark/ci_fixed_array_benchmarks.py::test_fixed_scalar_matrix_addition_20",
            "value": 2661014.140697038,
            "unit": "iter/sec",
            "range": "stddev: 6.21739453837131e-8",
            "extra": "mean: 375.7965749622268 nsec\nrounds: 189754"
          },
          {
            "name": "benchmark/ci_fixed_array_benchmarks.py::test_fixed_scalar_matrix_addition_200",
            "value": 78163.79615976183,
            "unit": "iter/sec",
            "range": "stddev: 0.000001915252493582633",
            "extra": "mean: 12.793646792129486 usec\nrounds: 65024"
          },
          {
            "name": "benchmark/ci_fixed_array_benchmarks.py::test_fixed_scalar_matrix_multiplication_20",
            "value": 2330753.6890540887,
            "unit": "iter/sec",
            "range": "stddev: 6.645636315048062e-8",
            "extra": "mean: 429.04576519445055 nsec\nrounds: 196117"
          },
          {
            "name": "benchmark/ci_fixed_array_benchmarks.py::test_fixed_scalar_matrix_multiplication_200",
            "value": 74344.03246524718,
            "unit": "iter/sec",
            "range": "stddev: 0.000002298962388588144",
            "extra": "mean: 13.450978738171882 usec\nrounds: 57333"
          },
          {
            "name": "benchmark/ci_fixed_array_benchmarks.py::test_fixed_scalar_matrix_multiplication_medium_20",
            "value": 1500194.1092859285,
            "unit": "iter/sec",
            "range": "stddev: 2.4506220730538953e-7",
            "extra": "mean: 666.580407035451 nsec\nrounds: 153351"
          },
          {
            "name": "benchmark/ci_fixed_array_benchmarks.py::test_fixed_scalar_matrix_multiplication_medium_200",
            "value": 27537.240511661385,
            "unit": "iter/sec",
            "range": "stddev: 0.000002978304674721167",
            "extra": "mean: 36.314459307443066 usec\nrounds: 23653"
          },
          {
            "name": "benchmark/ci_fixed_array_benchmarks.py::test_fixed_matrix_creation_20",
            "value": 330399.2478793627,
            "unit": "iter/sec",
            "range": "stddev: 5.341115889338933e-7",
            "extra": "mean: 3.0266412723951652 usec\nrounds: 166639"
          },
          {
            "name": "benchmark/ci_fixed_array_benchmarks.py::test_fixed_matrix_creation_200",
            "value": 4295.772631837854,
            "unit": "iter/sec",
            "range": "stddev: 0.0000073059305579324626",
            "extra": "mean: 232.78699449513732 usec\nrounds: 4360"
          },
          {
            "name": "benchmark/ci_fixed_array_benchmarks.py::test_fixed_matrix_to_numpy_20",
            "value": 493689.4125983068,
            "unit": "iter/sec",
            "range": "stddev: 3.342711318248378e-7",
            "extra": "mean: 2.0255650100676874 usec\nrounds: 160206"
          },
          {
            "name": "benchmark/ci_fixed_array_benchmarks.py::test_fixed_matrix_to_numpy_200",
            "value": 8483.435279286703,
            "unit": "iter/sec",
            "range": "stddev: 0.000004916298470675449",
            "extra": "mean: 117.87677598503247 usec\nrounds: 8553"
          },
          {
            "name": "benchmark/ci_fixed_array_benchmarks.py::test_fixed_vector_sum_20",
            "value": 177981.8752692721,
            "unit": "iter/sec",
            "range": "stddev: 8.57083883483377e-7",
            "extra": "mean: 5.6185496331414715 usec\nrounds: 129450"
          },
          {
            "name": "benchmark/ci_fixed_array_benchmarks.py::test_fixed_vector_max_20",
            "value": 208053.9486399556,
            "unit": "iter/sec",
            "range": "stddev: 7.87630095168403e-7",
            "extra": "mean: 4.8064456672751446 usec\nrounds: 168011"
          },
          {
            "name": "benchmark/ci_fixed_array_benchmarks.py::test_fixed_convolve_20",
            "value": 1431384.7630734215,
            "unit": "iter/sec",
            "range": "stddev: 9.170114018564097e-8",
            "extra": "mean: 698.624175552095 nsec\nrounds: 143823"
          },
          {
            "name": "benchmark/ci_fixed_array_benchmarks.py::test_fixed_convolve_200",
            "value": 81627.53711515125,
            "unit": "iter/sec",
            "range": "stddev: 0.000002568597599285697",
            "extra": "mean: 12.250767759773382 usec\nrounds: 68976"
          },
          {
            "name": "benchmark/ci_fixed_array_benchmarks.py::test_fixed_convolve_medium_20",
            "value": 1231769.8538588407,
            "unit": "iter/sec",
            "range": "stddev: 9.757580347967563e-8",
            "extra": "mean: 811.8399690228161 nsec\nrounds: 122625"
          },
          {
            "name": "benchmark/ci_fixed_array_benchmarks.py::test_fixed_convolve_long_20",
            "value": 114767.11540290569,
            "unit": "iter/sec",
            "range": "stddev: 0.0000011098131354821886",
            "extra": "mean: 8.713297328153303 usec\nrounds: 99217"
          },
          {
            "name": "benchmark/ci_fixed_array_benchmarks.py::test_fixed_scalar_matrix_division_20",
            "value": 679005.5040059995,
            "unit": "iter/sec",
            "range": "stddev: 1.4095973771970853e-7",
            "extra": "mean: 1.4727421119566715 usec\nrounds: 68363"
          },
          {
            "name": "benchmark/ci_fixed_array_benchmarks.py::test_fixed_scalar_matrix_division_200",
            "value": 8542.91967022184,
            "unit": "iter/sec",
            "range": "stddev: 0.000004304813527964658",
            "extra": "mean: 117.05599942437858 usec\nrounds: 8688"
          },
          {
            "name": "benchmark/ci_fixed_array_benchmarks.py::test_fixed_scalar_matrix_division_medium_20",
            "value": 487942.05341412727,
            "unit": "iter/sec",
            "range": "stddev: 3.2834067221474005e-7",
            "extra": "mean: 2.0494236825930594 usec\nrounds: 164447"
          },
          {
            "name": "benchmark/ci_fixed_array_benchmarks.py::test_fixed_scalar_matrix_division_medium_200",
            "value": 3353.307400513234,
            "unit": "iter/sec",
            "range": "stddev: 0.00000729810289847977",
            "extra": "mean: 298.21304180074486 usec\nrounds: 3397"
          },
          {
            "name": "benchmark/ci_fixed_array_benchmarks.py::test_fixed_scalar_matrix_division_long_20",
            "value": 38572.76637125235,
            "unit": "iter/sec",
            "range": "stddev: 0.0000018292842983012932",
            "extra": "mean: 25.92502675009806 usec\nrounds: 37981"
          },
          {
            "name": "benchmark/ci_fixed_array_benchmarks.py::test_fixed_scalar_matrix_reversed_division_20",
            "value": 496635.32909999,
            "unit": "iter/sec",
            "range": "stddev: 2.8432686379625624e-7",
            "extra": "mean: 2.0135498652748183 usec\nrounds: 166639"
          },
          {
            "name": "benchmark/ci_fixed_array_benchmarks.py::test_fixed_scalar_matrix_reversed_division_200",
            "value": 6289.565253315985,
            "unit": "iter/sec",
            "range": "stddev: 0.00000493488011479541",
            "extra": "mean: 158.99350109656308 usec\nrounds: 6384"
          },
          {
            "name": "benchmark/ci_fixed_array_benchmarks.py::test_fixed_scalar_matrix_reversed_division_medium_20",
            "value": 522322.7917053346,
            "unit": "iter/sec",
            "range": "stddev: 2.762950023410803e-7",
            "extra": "mean: 1.914524918078138 usec\nrounds: 173883"
          },
          {
            "name": "benchmark/ci_fixed_array_benchmarks.py::test_fixed_scalar_matrix_reversed_division_medium_200",
            "value": 3784.51906112182,
            "unit": "iter/sec",
            "range": "stddev: 0.0000069799004165537974",
            "extra": "mean: 264.234367392399 usec\nrounds: 3680"
          },
          {
            "name": "benchmark/ci_fixed_array_benchmarks.py::test_fixed_scalar_matrix_reversed_division_long_20",
            "value": 30365.701358332695,
            "unit": "iter/sec",
            "range": "stddev: 0.0000020230827364665235",
            "extra": "mean: 32.93189207782249 usec\nrounds: 29058"
          }
        ]
      }
    ],
    "APyTypes Floating-Point Array Benchmarks": [
      {
        "commit": {
          "author": {
            "email": "theodor.lindberg.se@gmail.com",
            "name": "Theodor Lindberg",
            "username": "Theodor-Lindberg"
          },
          "committer": {
            "email": "40732757+Theodor-Lindberg@users.noreply.github.com",
            "name": "Theodor-Lindberg",
            "username": "Theodor-Lindberg"
          },
          "distinct": true,
          "id": "0101f01f84c89f7a2144c460f108fc720fd6e14e",
          "message": "Fix apy.from_bits for APyCFloat",
          "timestamp": "2026-11-03T08:26:00+01:00",
          "tree_id": "3b4fb29205fe64b0546ebd1597bc64ff66e83581",
          "url": "https://github.com/simonbju/apytypes/commit/0101f01f84c89f7a2144c460f108fc720fd6e14e"
        },
        "date": 1793781401571,
        "tool": "pytest",
        "benches": [
          {
            "name": "benchmark/ci_float_array_benchmarks.py::test_float_matrix_multiplication_20",
            "value": 8644.409086254784,
            "unit": "iter/sec",
            "range": "stddev: 0.00003240256932218268",
            "extra": "mean: 115.68170710362031 usec\nrounds: 3322"
          },
          {
            "name": "benchmark/ci_float_array_benchmarks.py::test_float_matrix_addition_20",
            "value": 264350.80406282033,
            "unit": "iter/sec",
            "range": "stddev: 6.690663107206535e-7",
            "extra": "mean: 3.7828521216162447 usec\nrounds: 122310"
          },
          {
            "name": "benchmark/ci_float_array_benchmarks.py::test_float_matrix_addition_200",
            "value": 1451.9366583407689,
            "unit": "iter/sec",
            "range": "stddev: 0.000009337504688371248",
            "extra": "mean: 688.7352793631995 usec\nrounds: 1192"
          },
          {
            "name": "benchmark/ci_float_array_benchmarks.py::test_float_matrix_elementwise_multiplication_20",
            "value": 267604.8976127518,
            "unit": "iter/sec",
            "range": "stddev: 6.92522623161862e-7",
            "extra": "mean: 3.7368523854413507 usec\nrounds: 156177"
          },
          {
            "name": "benchmark/ci_float_array_benchmarks.py::test_float_matrix_elementwise_multiplication_200",
            "value": 1937.2045810857212,
            "unit": "iter/sec",
            "range": "stddev: 0.000009107144854819689",
            "extra": "mean: 516.207740660794 usec\nrounds: 1847"
          },
          {
            "name": "benchmark/ci_float_array_benchmarks.py::test_float_scalar_matrix_addition_20",
            "value": 274076.1480739583,
            "unit": "iter/sec",
            "range": "stddev: 6.828660122616506e-7",
            "extra": "mean: 3.648621038450067 usec\nrounds: 155715"
          },
          {
            "name": "benchmark/ci_float_array_benchmarks.py::test_float_scalar_matrix_addition_200",
            "value": 1719.23672319405,
            "unit": "iter/sec",
            "range": "stddev: 0.000009087155786916866",
            "extra": "mean: 581.6534666280102 usec\nrounds: 1693"
          },
          {
            "name": "benchmark/ci_float_array_benchmarks.py::test_float_scalar_matrix_multiplication_20",
            "value": 271904.6576803324,
            "unit": "iter/sec",
            "range": "stddev: 6.936631452501883e-7",
            "extra": "mean: 3.677759728469457 usec\nrounds: 189394"
          },
          {
            "name": "benchmark/ci_float_array_benchmarks.py::test_float_scalar_matrix_multiplication_200",
            "value": 2362.962277522655,
            "unit": "iter/sec",
            "range": "stddev: 0.000011805090621689963",
            "extra": "mean: 423.1976149227429 usec\nrounds: 2332"
          },
          {
            "name": "benchmark/ci_float_array_benchmarks.py::test_float_matrix_creation_20",
            "value": 236095.3384731347,
            "unit": "iter/sec",
            "range": "stddev: 6.546918613643808e-7",
            "extra": "mean: 4.235577061652956 usec\nrounds: 121286"
          },
          {
            "name": "benchmark/ci_float_array_benchmarks.py::test_float_matrix_creation_200",
            "value": 2859.2829346268736,
            "unit": "iter/sec",
            "range": "stddev: 0.000008835006694254164",
            "extra": "mean: 349.73803672580465 usec\nrounds: 2968"
          },
          {
            "name": "benchmark/ci_float_array_benchmarks.py::test_float_matrix_to_numpy_20",
            "value": 560130.9323121381,
            "unit": "iter/sec",
            "range": "stddev: 3.189657779761593e-7",
            "extra": "mean: 1.7852968695589564 usec\nrounds: 186916"
          },
          {
            "name": "benchmark/ci_float_array_benchmarks.py::test_float_matrix_to_numpy_200",
            "value": 10040.240506636625,
            "unit": "iter/sec",
            "range": "stddev: 0.000004992870868727049",
            "extra": "mean: 99.59920774198561 usec\nrounds: 10075"
          },
          {
            "name": "benchmark/ci_float_array_benchmarks.py::test_float_matrix_cast_20",
            "value": 235061.02328977917,
            "unit": "iter/sec",
            "range": "stddev: 4.899652712491819e-7",
            "extra": "mean: 4.254214441869494 usec\nrounds: 116605"
          },
          {
            "name": "benchmark/ci_float_array_benchmarks.py::test_float_matrix_cast_200",
            "value": 2557.5465404758647,
            "unit": "iter/sec",
            "range": "stddev: 0.000009182515719398015",
            "extra": "mean: 390.99972734569945 usec\nrounds: 2494"
          },
          {
            "name": "benchmark/ci_float_array_benchmarks.py::test_float_convolve_20",
            "value": 154698.67611870606,
            "unit": "iter/sec",
            "range": "stddev: 0.0000031216493571902518",
            "extra": "mean: 6.464179429904511 usec\nrounds: 119105"
          },
          {
            "name": "benchmark/ci_float_array_benchmarks.py::test_float_convolve_200",
            "value": 1110.3591037999413,
            "unit": "iter/sec",
            "range": "stddev: 0.000010197024764890707",
            "extra": "mean: 900.6095384616893 usec\nrounds: 1105"
          },
          {
            "name": "benchmark/ci_float_array_benchmarks.py::test_float_convolve_long_20",
            "value": 101033.44116957723,
            "unit": "iter/sec",
            "range": "stddev: 0.0000011985117218045164",
            "extra": "mean: 9.897712959430663 usec\nrounds: 72596"
          },
          {
            "name": "benchmark/ci_float_array_benchmarks.py::test_float_matrix_elementwise_division_20",
            "value": 16303.979425203657,
            "unit": "iter/sec",
            "range": "stddev: 0.0000030703677936278664",
            "extra": "mean: 61.33471920690361 usec\nrounds: 16286"
          },
          {
            "name": "benchmark/ci_float_array_benchmarks.py::test_float_matrix_elementwise_division_200",
            "value": 163.77872806561044,
            "unit": "iter/sec",
            "range": "stddev: 0.00004173586190031366",
            "extra": "mean: 6.105799036364453 msec\nrounds: 165"
          },
          {
            "name": "benchmark/ci_float_array_benchmarks.py::test_float_scalar_matrix_division_20",
            "value": 17761.447168401417,
            "unit": "iter/sec",
            "range": "stddev: 0.000002920755115178795",
            "extra": "mean: 56.30171857724828 usec\nrounds: 17742"
          },
          {
            "name": "benchmark/ci_float_array_benchmarks.py::test_float_scalar_matrix_division_200",
            "value": 179.4292144960229,
            "unit": "iter/sec",
            "range": "stddev: 0.00004305976548725559",
            "extra": "mean: 5.573228433333889 msec\nrounds: 180"
          },
          {
            "name": "benchmark/ci_float_array_benchmarks.py::test_float_scalar_matrix_reversed_division_20",
            "value": 17889.875695641327,
            "unit": "iter/sec",
            "range": "stddev: 0.000003054331777519933",
            "extra": "mean: 55.89753763597357 usec\nrounds: 17895"
          },
          {
            "name": "benchmark/ci_float_array_benchmarks.py::test_float_scalar_matrix_reversed_division_200",
            "value": 179.80637101430167,
            "unit": "iter/sec",
            "range": "stddev: 0.00019761022208478361",
            "extra": "mean: 5.561538194441735 msec\nrounds: 180"
          }
        ]
      }
    ],
    "APyTypes Fixed-Point Scalar Benchmarks": [
      {
        "commit": {
          "author": {
            "email": "theodor.lindberg.se@gmail.com",
            "name": "Theodor Lindberg",
            "username": "Theodor-Lindberg"
          },
          "committer": {
            "email": "40732757+Theodor-Lindberg@users.noreply.github.com",
            "name": "Theodor-Lindberg",
            "username": "Theodor-Lindberg"
          },
          "distinct": true,
          "id": "0101f01f84c89f7a2144c460f108fc720fd6e14e",
          "message": "Fix apy.from_bits for APyCFloat",
          "timestamp": "2026-11-03T08:26:00+01:00",
          "tree_id": "3b4fb29205fe64b0546ebd1597bc64ff66e83581",
          "url": "https://github.com/simonbju/apytypes/commit/0101f01f84c89f7a2144c460f108fc720fd6e14e"
        },
        "date": 1793781426623,
        "tool": "pytest",
        "benches": [
          {
            "name": "benchmark/ci_fixed_scalar_benchmarks.py::test_fixed_scalar_multiplication_short",
            "value": 4826618.221242758,
            "unit": "iter/sec",
            "range": "stddev: 4.789546638825904e-8",
            "extra": "mean: 207.18439995913326 nsec\nrounds: 199243"
          },
          {
            "name": "benchmark/ci_fixed_scalar_benchmarks.py::test_fixed_scalar_multiplication_long",
            "value": 3517324.414005785,
            "unit": "iter/sec",
            "range": "stddev: 4.782378122650759e-8",
            "extra": "mean: 284.3070135976247 nsec\nrounds: 198020"
          },
          {
            "name": "benchmark/ci_fixed_scalar_benchmarks.py::test_fixed_scalar_multiplication_mixed",
            "value": 3825080.08751769,
            "unit": "iter/sec",
            "range": "stddev: 3.9685889155342345e-8",
            "extra": "mean: 261.4324346471282 nsec\nrounds: 90001"
          },
          {
            "name": "benchmark/ci_fixed_scalar_benchmarks.py::test_fixed_scalar_division_short",
            "value": 5236214.542820102,
            "unit": "iter/sec",
            "range": "stddev: 1.566307668978867e-8",
            "extra": "mean: 190.97765987667563 nsec\nrounds: 52869"
          },
          {
            "name": "benchmark/ci_fixed_scalar_benchmarks.py::test_fixed_scalar_division_long",
            "value": 2967013.564571714,
            "unit": "iter/sec",
            "range": "stddev: 5.47964977815015e-8",
            "extra": "mean: 337.03924105394145 nsec\nrounds: 197239"
          },
          {
            "name": "benchmark/ci_fixed_scalar_benchmarks.py::test_fixed_scalar_division_mixed",
            "value": 3245120.4745334173,
            "unit": "iter/sec",
            "range": "stddev: 4.8536280280996604e-8",
            "extra": "mean: 308.1549692369371 nsec\nrounds: 193799"
          },
          {
            "name": "benchmark/ci_fixed_scalar_benchmarks.py::test_fixed_scalar_addition_short",
            "value": 5263665.141109617,
            "unit": "iter/sec",
            "range": "stddev: 1.527524694318061e-8",
            "extra": "mean: 189.98169017058578 nsec\nrounds: 53752"
          },
          {
            "name": "benchmark/ci_fixed_scalar_benchmarks.py::test_fixed_scalar_addition_short_different_wl",
            "value": 5322057.178783261,
            "unit": "iter/sec",
            "range": "stddev: 1.6302999234723302e-8",
            "extra": "mean: 187.89726724217982 nsec\nrounds: 51878"
          },
          {
            "name": "benchmark/ci_fixed_scalar_benchmarks.py::test_fixed_scalar_addition_long",
            "value": 4153631.930995444,
            "unit": "iter/sec",
            "range": "stddev: 3.640681015931775e-8",
            "extra": "mean: 240.75315690293812 nsec\nrounds: 195351"
          },
          {
            "name": "benchmark/ci_fixed_scalar_benchmarks.py::test_fixed_scalar_addition_mixed",
            "value": 4127227.432494118,
            "unit": "iter/sec",
            "range": "stddev: 3.860337014699977e-8",
            "extra": "mean: 242.2934079490966 nsec\nrounds: 196117"
          },
          {
            "name": "benchmark/ci_fixed_scalar_benchmarks.py::test_fixed_scalar_creation_short",
            "value": 5586845.999051465,
            "unit": "iter/sec",
            "range": "stddev: 1.5539205985587563e-8",
            "extra": "mean: 178.99186771387295 nsec\nrounds: 57134"
          },
          {
            "name": "benchmark/ci_fixed_scalar_benchmarks.py::test_fixed_scalar_creation_long",
            "value": 4718944.345133153,
            "unit": "iter/sec",
            "range": "stddev: 1.7207747689295543e-8",
            "extra": "mean: 211.91180206042108 nsec\nrounds: 47873"
          },
          {
            "name": "benchmark/ci_fixed_scalar_benchmarks.py::test_fixed_scalar_to_float_short",
            "value": 9908834.155691287,
            "unit": "iter/sec",
            "range": "stddev: 1.107790307566023e-8",
            "extra": "mean: 100.92004612123165 nsec\nrounds: 103424"
          },
          {
            "name": "benchmark/ci_fixed_scalar_benchmarks.py::test_fixed_scalar_negation_short",
            "value": 5636969.920110576,
            "unit": "iter/sec",
            "range": "stddev: 1.6153366895987795e-8",
            "extra": "mean: 177.40027251739954 nsec\nrounds: 57831"
          },
          {
            "name": "benchmark/ci_fixed_scalar_benchmarks.py::test_fixed_scalar_negation_long",
            "value": 4777897.66430006,
            "unit": "iter/sec",
            "range": "stddev: 1.743778197531364e-8",
            "extra": "mean: 209.29707378872783 nsec\nrounds: 49412"
          },
          {
            "name": "benchmark/ci_fixed_scalar_benchmarks.py::test_fixed_scalar_abs_short",
            "value": 6826968.823291979,
            "unit": "iter/sec",
            "range": "stddev: 2.4959106550778756e-8",
            "extra": "mean: 146.47789170916383 nsec\nrounds: 69701"
          },
          {
            "name": "benchmark/ci_fixed_scalar_benchmarks.py::test_fixed_scalar_abs_long",
            "value": 5334220.095991823,
            "unit": "iter/sec",
            "range": "stddev: 2.7162774290604154e-8",
            "extra": "mean: 187.46882993287215 nsec\nrounds: 55390"
          }
        ]
      }
    ],
    "APyTypes Floating-Point Scalar Benchmarks": [
      {
        "commit": {
          "author": {
            "email": "theodor.lindberg.se@gmail.com",
            "name": "Theodor Lindberg",
            "username": "Theodor-Lindberg"
          },
          "committer": {
            "email": "40732757+Theodor-Lindberg@users.noreply.github.com",
            "name": "Theodor-Lindberg",
            "username": "Theodor-Lindberg"
          },
          "distinct": true,
          "id": "0101f01f84c89f7a2144c460f108fc720fd6e14e",
          "message": "Fix apy.from_bits for APyCFloat",
          "timestamp": "2026-11-03T08:26:00+01:00",
          "tree_id": "3b4fb29205fe64b0546ebd1597bc64ff66e83581",
          "url": "https://github.com/simonbju/apytypes/commit/0101f01f84c89f7a2144c460f108fc720fd6e14e"
        },
        "date": 1793781446473,
        "tool": "pytest",
        "benches": [
          {
            "name": "benchmark/ci_float_scalar_benchmarks.py::test_float_scalar_multiplication_short",
            "value": 4121250.4915166344,
            "unit": "iter/sec",
            "range": "stddev: 5.58241115076504e-8",
            "extra": "mean: 242.6447996933078 nsec\nrounds: 184809"
          },
          {
            "name": "benchmark/ci_float_scalar_benchmarks.py::test_float_scalar_multiplication_long",
            "value": 4007000.3606929476,
            "unit": "iter/sec",
            "range": "stddev: 3.867068031047984e-8",
            "extra": "mean: 249.56324182288463 nsec\nrounds: 198413"
          },
          {
            "name": "benchmark/ci_float_scalar_benchmarks.py::test_float_scalar_multiplication_mixed",
            "value": 3949830.3650710154,
            "unit": "iter/sec",
            "range": "stddev: 4.171761979010352e-8",
            "extra": "mean: 253.1754297205168 nsec\nrounds: 197629"
          },
          {
            "name": "benchmark/ci_float_scalar_benchmarks.py::test_float_scalar_division_short",
            "value": 2298905.1820211587,
            "unit": "iter/sec",
            "range": "stddev: 7.113949841472221e-8",
            "extra": "mean: 434.9896671774939 nsec\nrounds: 190840"
          },
          {
            "name": "benchmark/ci_float_scalar_benchmarks.py::test_float_scalar_division_long",
            "value": 2430417.5971578727,
            "unit": "iter/sec",
            "range": "stddev: 7.171713518781334e-8",
            "extra": "mean: 411.4519254507533 nsec\nrounds: 182117"
          },
          {
            "name": "benchmark/ci_float_scalar_benchmarks.py::test_float_scalar_division_mixed",
            "value": 2419359.0950488327,
            "unit": "iter/sec",
            "range": "stddev: 5.909864822937758e-8",
            "extra": "mean: 413.33260616271434 nsec\nrounds: 189036"
          },
          {
            "name": "benchmark/ci_float_scalar_benchmarks.py::test_float_scalar_addition_short",
            "value": 4695773.63475578,
            "unit": "iter/sec",
            "range": "stddev: 1.723405399630657e-8",
            "extra": "mean: 212.95745446469087 nsec\nrounds: 47106"
          },
          {
            "name": "benchmark/ci_float_scalar_benchmarks.py::test_float_scalar_addition_long",
            "value": 3070779.474115896,
            "unit": "iter/sec",
            "range": "stddev: 4.8275252172861274e-8",
            "extra": "mean: 325.6502163145104 nsec\nrounds: 190115"
          },
          {
            "name": "benchmark/ci_float_scalar_benchmarks.py::test_float_scalar_addition_mixed",
            "value": 3007966.371057509,
            "unit": "iter/sec",
            "range": "stddev: 4.9467670887829764e-8",
            "extra": "mean: 332.45052525252487 nsec\nrounds: 186220"
          },
          {
            "name": "benchmark/ci_float_scalar_benchmarks.py::test_float_scalar_creation_short",
            "value": 5197844.305820585,
            "unit": "iter/sec",
            "range": "stddev: 1.621063531966347e-8",
            "extra": "mean: 192.38744778872896 nsec\nrounds: 53150"
          },
          {
            "name": "benchmark/ci_float_scalar_benchmarks.py::test_float_scalar_creation_long",
            "value": 5224581.422567139,
            "unit": "iter/sec",
            "range": "stddev: 1.5602742177721986e-8",
            "extra": "mean: 191.402893192665 nsec\nrounds: 54248"
          },
          {
            "name": "benchmark/ci_float_scalar_benchmarks.py::test_float_scalar_to_float_short",
            "value": 9263285.005080082,
            "unit": "iter/sec",
            "range": "stddev: 1.1412068933498228e-8",
            "extra": "mean: 107.953064107559 nsec\nrounds: 95979"
          }
        ]
      }
    ],
    "APyTypes Complex Fixed-Point Scalar Benchmarks": [
      {
        "commit": {
          "author": {
            "email": "theodor.lindberg.se@gmail.com",
            "name": "Theodor Lindberg",
            "username": "Theodor-Lindberg"
          },
          "committer": {
            "email": "40732757+Theodor-Lindberg@users.noreply.github.com",
            "name": "Theodor-Lindberg",
            "username": "Theodor-Lindberg"
          },
          "distinct": true,
          "id": "0101f01f84c89f7a2144c460f108fc720fd6e14e",
          "message": "Fix apy.from_bits for APyCFloat",
          "timestamp": "2026-11-03T08:26:00+01:00",
          "tree_id": "3b4fb29205fe64b0546ebd1597bc64ff66e83581",
          "url": "https://github.com/simonbju/apytypes/commit/0101f01f84c89f7a2144c460f108fc720fd6e14e"
        },
        "date": 1793781491068,
        "tool": "pytest",
        "benches": [
          {
            "name": "benchmark/ci_cfixed_scalar_benchmarks.py::test_cfixed_scalar_multiplication_short",
            "value": 5489726.283566705,
            "unit": "iter/sec",
            "range": "stddev: 4.262888851585411e-8",
            "extra": "mean: 182.1584444006732 nsec\nrounds: 199243"
          },
          {
            "name": "benchmark/ci_cfixed_scalar_benchmarks.py::test_cfixed_fixed_scalar_multiplication_short",
            "value": 3847065.854372181,
            "unit": "iter/sec",
            "range": "stddev: 4.2882508181658765e-8",
            "extra": "mean: 259.93836285997094 nsec\nrounds: 194932"
          },
          {
            "name": "benchmark/ci_cfixed_scalar_benchmarks.py::test_cfixed_scalar_multiplication_medium",
            "value": 4611592.68635881,
            "unit": "iter/sec",
            "range": "stddev: 2.282448435421688e-8",
            "extra": "mean: 216.84482303869146 nsec\nrounds: 47779"
          },
          {
            "name": "benchmark/ci_cfixed_scalar_benchmarks.py::test_cfixed_fixed_scalar_multiplication_medium",
            "value": 3419009.062197207,
            "unit": "iter/sec",
            "range": "stddev: 5.6697876963801464e-8",
            "extra": "mean: 292.4824069806225 nsec\nrounds: 192308"
          },
          {
            "name": "benchmark/ci_cfixed_scalar_benchmarks.py::test_cfixed_scalar_multiplication_long",
            "value": 2337629.3042191034,
            "unit": "iter/sec",
            "range": "stddev: 7.42944597642508e-8",
            "extra": "mean: 427.7838227794012 nsec\nrounds: 184843"
          },
          {
            "name": "benchmark/ci_cfixed_scalar_benchmarks.py::test_cfixed_fixed_scalar_multiplication_long",
            "value": 2391008.4445343544,
            "unit": "iter/sec",
            "range": "stddev: 6.85346386761319e-8",
            "extra": "mean: 418.23357097960763 nsec\nrounds: 186916"
          },
          {
            "name": "benchmark/ci_cfixed_scalar_benchmarks.py::test_cfixed_scalar_multiplication_mixed",
            "value": 2803186.0272488547,
            "unit": "iter/sec",
            "range": "stddev: 5.490020690870171e-8",
            "extra": "mean: 356.73693799816596 nsec\nrounds: 189754"
          },
          {
            "name": "benchmark/ci_cfixed_scalar_benchmarks.py::test_cfixed_fixed_scalar_multiplication_mixed",
            "value": 2520657.1348456377,
            "unit": "iter/sec",
            "range": "stddev: 7.081947400993435e-8",
            "extra": "mean: 396.72194451834446 nsec\nrounds: 197239"
          },
          {
            "name": "benchmark/ci_cfixed_scalar_benchmarks.py::test_fixed_cfixed_scalar_multiplication_mixed",
            "value": 2095836.1021892964,
            "unit": "iter/sec",
            "range": "stddev: 8.007079515160087e-8",
            "extra": "mean: 477.1365465817707 nsec\nrounds: 193051"
          },
          {
            "name": "benchmark/ci_cfixed_scalar_benchmarks.py::test_cfixed_scalar_division_short",
            "value": 5608802.793607065,
            "unit": "iter/sec",
            "range": "stddev: 1.7319639290880908e-8",
            "extra": "mean: 178.29116779427576 nsec\nrounds: 56748"
          },
          {
            "name": "benchmark/ci_cfixed_scalar_benchmarks.py::test_cfixed_fixed_scalar_division_short",
            "value": 4017450.4461225015,
            "unit": "iter/sec",
            "range": "stddev: 4.445983522596613e-8",
            "extra": "mean: 248.91408454463055 nsec\nrounds: 187618"
          },
          {
            "name": "benchmark/ci_cfixed_scalar_benchmarks.py::test_fixed_cfixed_scalar_division_short",
            "value": 2989182.873223359,
            "unit": "iter/sec",
            "range": "stddev: 5.685023284676954e-8",
            "extra": "mean: 334.53958570345304 nsec\nrounds: 188324"
          },
          {
            "name": "benchmark/ci_cfixed_scalar_benchmarks.py::test_cfixed_scalar_division_medium",
            "value": 4530901.286360053,
            "unit": "iter/sec",
            "range": "stddev: 1.888839928791248e-8",
            "extra": "mean: 220.70664020212197 nsec\nrounds: 45598"
          },
          {
            "name": "benchmark/ci_cfixed_scalar_benchmarks.py::test_cfixed_fixed_scalar_division_medium",
            "value": 3344879.157371485,
            "unit": "iter/sec",
            "range": "stddev: 5.8767515681803985e-8",
            "extra": "mean: 298.9644626760844 nsec\nrounds: 199204"
          },
          {
            "name": "benchmark/ci_cfixed_scalar_benchmarks.py::test_fixed_cfixed_scalar_division_medium",
            "value": 2596869.0220082575,
            "unit": "iter/sec",
            "range": "stddev: 7.494985139683027e-8",
            "extra": "mean: 385.0791054631866 nsec\nrounds: 185529"
          },
          {
            "name": "benchmark/ci_cfixed_scalar_benchmarks.py::test_cfixed_scalar_division_long",
            "value": 1261320.7853765534,
            "unit": "iter/sec",
            "range": "stddev: 1.810624705185679e-7",
            "extra": "mean: 792.81972642785 nsec\nrounds: 126840"
          },
          {
            "name": "benchmark/ci_cfixed_scalar_benchmarks.py::test_cfixed_fixed_scalar_division_long",
            "value": 2065303.1472597513,
            "unit": "iter/sec",
            "range": "stddev: 7.638143964073204e-8",
            "extra": "mean: 484.19042082359783 nsec\nrounds: 186951"
          },
          {
            "name": "benchmark/ci_cfixed_scalar_benchmarks.py::test_fixed_cfixed_scalar_division_long",
            "value": 1031612.8165472621,
            "unit": "iter/sec",
            "range": "stddev: 1.5177277368465354e-7",
            "extra": "mean: 969.3559288521948 nsec\nrounds: 101647"
          },
          {
            "name": "benchmark/ci_cfixed_scalar_benchmarks.py::test_cfixed_scalar_division_mixed",
            "value": 1616862.6114225828,
            "unit": "iter/sec",
            "range": "stddev: 8.847529465845461e-8",
            "extra": "mean: 618.4817392246819 nsec\nrounds: 164177"
          },
          {
            "name": "benchmark/ci_cfixed_scalar_benchmarks.py::test_cfixed_fixed_scalar_division_mixed",
            "value": 2242340.5259648324,
            "unit": "iter/sec",
            "range": "stddev: 6.599234391857236e-8",
            "extra": "mean: 445.9625950745018 nsec\nrounds: 191608"
          },
          {
            "name": "benchmark/ci_cfixed_scalar_benchmarks.py::test_cfixed_scalar_addition_short",
            "value": 5558742.737739386,
            "unit": "iter/sec",
            "range": "stddev: 1.619461402223692e-8",
            "extra": "mean: 179.8967945054923 nsec\nrounds: 56712"
          },
          {
            "name": "benchmark/ci_cfixed_scalar_benchmarks.py::test_cfixed_scalar_addition_short_different_wl",
            "value": 5400060.436326255,
            "unit": "iter/sec",
            "range": "stddev: 1.968666204324801e-8",
            "extra": "mean: 185.1831126320348 nsec\nrounds: 56139"
          },
          {
            "name": "benchmark/ci_cfixed_scalar_benchmarks.py::test_cfixed_scalar_addition_long",
            "value": 3843995.040608171,
            "unit": "iter/sec",
            "range": "stddev: 3.875619474587094e-8",
            "extra": "mean: 260.1460172128075 nsec\nrounds: 192679"
          },
          {
            "name": "benchmark/ci_cfixed_scalar_benchmarks.py::test_cfixed_scalar_addition_mixed",
            "value": 3313186.968613713,
            "unit": "iter/sec",
            "range": "stddev: 4.637979733144902e-8",
            "extra": "mean: 301.8241981129169 nsec\nrounds: 198453"
          },
          {
            "name": "benchmark/ci_cfixed_scalar_benchmarks.py::test_cfixed_scalar_creation_short",
            "value": 4793078.796662448,
            "unit": "iter/sec",
            "range": "stddev: 1.644605083134297e-8",
            "extra": "mean: 208.63416656040107 nsec\nrounds: 47574"
          },
          {
            "name": "benchmark/ci_cfixed_scalar_benchmarks.py::test_cfixed_scalar_creation_long",
            "value": 3966161.175874943,
            "unit": "iter/sec",
            "range": "stddev: 3.8325855695229514e-8",
            "extra": "mean: 252.13297081387472 nsec\nrounds: 198060"
          },
          {
            "name": "benchmark/ci_cfixed_scalar_benchmarks.py::test_cfixed_scalar_to_complex_short",
            "value": 5452420.338450368,
            "unit": "iter/sec",
            "range": "stddev: 1.4823168071487995e-8",
            "extra": "mean: 183.4047886858646 nsec\nrounds: 55888"
          },
          {
            "name": "benchmark/ci_cfixed_scalar_benchmarks.py::test_cfixed_scalar_negation_short",
            "value": 5670713.199807383,
            "unit": "iter/sec",
            "range": "stddev: 1.4305376519807e-8",
            "extra": "mean: 176.34466155579284 nsec\nrounds: 57631"
          },
          {
            "name": "benchmark/ci_cfixed_scalar_benchmarks.py::test_cfixed_scalar_negation_long",
            "value": 4857062.679982474,
            "unit": "iter/sec",
            "range": "stddev: 1.59334282523246e-8",
            "extra": "mean: 205.8857515101305 nsec\nrounds: 49121"
          }
        ]
      }
    ],
    "APyTypes Complex Fixed-Point Array Benchmarks": [
      {
        "commit": {
          "author": {
            "email": "theodor.lindberg.se@gmail.com",
            "name": "Theodor Lindberg",
            "username": "Theodor-Lindberg"
          },
          "committer": {
            "email": "40732757+Theodor-Lindberg@users.noreply.github.com",
            "name": "Theodor-Lindberg",
            "username": "Theodor-Lindberg"
          },
          "distinct": true,
          "id": "0101f01f84c89f7a2144c460f108fc720fd6e14e",
          "message": "Fix apy.from_bits for APyCFloat",
          "timestamp": "2026-11-03T08:26:00+01:00",
          "tree_id": "3b4fb29205fe64b0546ebd1597bc64ff66e83581",
          "url": "https://github.com/simonbju/apytypes/commit/0101f01f84c89f7a2144c460f108fc720fd6e14e"
        },
        "date": 1793781567990,
        "tool": "pytest",
        "benches": [
          {
            "name": "benchmark/ci_cfixed_array_benchmarks.py::test_cfixed_matrix_multiplication_20",
            "value": 25694.269968091256,
            "unit": "iter/sec",
            "range": "stddev: 0.00001451803086076152",
            "extra": "mean: 38.91918319694867 usec\nrounds: 15759"
          },
          {
            "name": "benchmark/ci_cfixed_array_benchmarks.py::test_cfixed_matrix_multiplication_medium_20",
            "value": 20478.592714396775,
            "unit": "iter/sec",
            "range": "stddev: 0.000017856748209892263",
            "extra": "mean: 48.831480460909994 usec\nrounds: 21265"
          },
          {
            "name": "benchmark/ci_cfixed_array_benchmarks.py::test_cfixed_matrix_addition_20",
            "value": 2277852.7216914515,
            "unit": "iter/sec",
            "range": "stddev: 8.379347659132374e-8",
            "extra": "mean: 439.0099458482267 nsec\nrounds: 139978"
          },
          {
            "name": "benchmark/ci_cfixed_array_benchmarks.py::test_cfixed_matrix_addition_200",
            "value": 29003.25026302445,
            "unit": "iter/sec",
            "range": "stddev: 0.0000032251068840935237",
            "extra": "mean: 34.478894293956984 usec\nrounds: 20803"
          },
          {
            "name": "benchmark/ci_cfixed_array_benchmarks.py::test_cfixed_matrix_addition_long_200",
            "value": 3172.8627177289186,
            "unit": "iter/sec",
            "range": "stddev: 0.000009071307933479661",
            "extra": "mean: 315.17279156527235 usec\nrounds: 830"
          },
          {
            "name": "benchmark/ci_cfixed_array_benchmarks.py::test_cfixed_matrix_addition_different_wl_long_200",
            "value": 325.3858387828135,
            "unit": "iter/sec",
            "range": "stddev: 0.000029848316731808515",
            "extra": "mean: 3.0732744969502925 msec\nrounds: 328"
          },
          {
            "name": "benchmark/ci_cfixed_array_benchmarks.py::test_cfixed_matrix_addition_20_different_wl",
            "value": 2111603.470026029,
            "unit": "iter/sec",
            "range": "stddev: 8.084365108288909e-8",
            "extra": "mean: 473.57376240136284 nsec\nrounds: 194591"
          },
          {
            "name": "benchmark/ci_cfixed_array_benchmarks.py::test_cfixed_matrix_addition_200_different_wl",
            "value": 28855.419692151427,
            "unit": "iter/sec",
            "range": "stddev: 0.0000033501324861180165",
            "extra": "mean: 34.65553475460266 usec\nrounds: 18947"
          },
          {
            "name": "benchmark/ci_cfixed_array_benchmarks.py::test_cfixed_matrix_elementwise_multiplication_20",
            "value": 969718.9216857296,
            "unit": "iter/sec",
            "range": "stddev: 2.358367640143418e-7",
            "extra": "mean: 1.031226655102935 usec\nrounds: 100311"
          },
          {
            "name": "benchmark/ci_cfixed_array_benchmarks.py::test_cfixed_fixed_matrix_elementwise_multiplication_20",
            "value": 1405423.7319740488,
            "unit": "iter/sec",
            "range": "stddev: 1.0187154617908683e-7",
            "extra": "mean: 711.5291831563187 nsec\nrounds: 140588"
          },
          {
            "name": "benchmark/ci_cfixed_array_benchmarks.py::test_cfixed_matrix_elementwise_multiplication_200",
            "value": 13651.453345117583,
            "unit": "iter/sec",
            "range": "stddev: 0.000003986159998303931",
            "extra": "mean: 73.25227393152599 usec\nrounds: 12755"
          },
          {
            "name": "benchmark/ci_cfixed_array_benchmarks.py::test_cfixed_fixed_matrix_elementwise_multiplication_200",
            "value": 26733.502569928223,
            "unit": "iter/sec",
            "range": "stddev: 0.0000029213357422608003",
            "extra": "mean: 37.40624698855855 usec\nrounds: 25819"
          },
          {
            "name": "benchmark/ci_cfixed_array_benchmarks.py::test_cfixed_matrix_elementwise_division_20",
            "value": 201647.48063947068,
            "unit": "iter/sec",
            "range": "stddev: 7.560191634797838e-7",
            "extra": "mean: 4.959149486166498 usec\nrounds: 185529"
          },
          {
            "name": "benchmark/ci_cfixed_array_benchmarks.py::test_cfixed_fixed_matrix_elementwise_division_20",
            "value": 434094.19595127564,
            "unit": "iter/sec",
            "range": "stddev: 2.9952941982594775e-7",
            "extra": "mean: 2.3036474786505643 usec\nrounds: 144865"
          },
          {
            "name": "benchmark/ci_cfixed_array_benchmarks.py::test_fixed_cfixed_matrix_elementwise_division_20",
            "value": 176217.40670887765,
            "unit": "iter/sec",
            "range": "stddev: 7.89863890712534e-7",
            "extra": "mean: 5.674808287538038 usec\nrounds: 160746"
          },
          {
            "name": "benchmark/ci_cfixed_array_benchmarks.py::test_cfixed_matrix_elementwise_division_200",
            "value": 2163.233405630988,
            "unit": "iter/sec",
            "range": "stddev: 0.000007767614074959043",
            "extra": "mean: 462.2709678007736 usec\nrounds: 2205"
          },
          {
            "name": "benchmark/ci_cfixed_array_benchmarks.py::test_cfixed_fixed_matrix_elementwise_division_200",
            "value": 5091.81024543773,
            "unit": "iter/sec",
            "range": "stddev: 0.000005491625821735965",
            "extra": "mean: 196.39380727041066 usec\nrounds: 5116"
          },
          {
            "name": "benchmark/ci_cfixed_array_benchmarks.py::test_fixed_cfixed_matrix_elementwise_division_200",
            "value": 1908.1047738030763,
            "unit": "iter/sec",
            "range": "stddev: 0.000008454837296459955",
            "extra": "mean: 524.0802359122465 usec\nrounds: 1899"
          },
          {
            "name": "benchmark/ci_cfixed_array_benchmarks.py::test_cfixed_matrix_elementwise_division_medium_20",
            "value": 171428.8778563979,
            "unit": "iter/sec",
            "range": "stddev: 8.124857234616652e-7",
            "extra": "mean: 5.833322906293987 usec\nrounds: 137495"
          },
          {
            "name": "benchmark/ci_cfixed_array_benchmarks.py::test_cfixed_fixed_matrix_elementwise_division_medium_20",
            "value": 239179.97199925437,
            "unit": "iter/sec",
            "range": "stddev: 6.879047561428065e-7",
            "extra": "mean: 4.180952074043715 usec\nrounds: 168322"
          },
          {
            "name": "benchmark/ci_cfixed_array_benchmarks.py::test_fixed_cfixed_matrix_elementwise_division_medium_20",
            "value": 151868.62309117438,
            "unit": "iter/sec",
            "range": "stddev: 8.720930234212186e-7",
            "extra": "mean: 6.584638614914219 usec\nrounds: 98532"
          },
          {
            "name": "benchmark/ci_cfixed_array_benchmarks.py::test_cfixed_matrix_elementwise_division_medium_200",
            "value": 1100.7523242395748,
            "unit": "iter/sec",
            "range": "stddev: 0.000010107170306499218",
            "extra": "mean: 908.4695784683654 usec\nrounds: 1096"
          },
          {
            "name": "benchmark/ci_cfixed_array_benchmarks.py::test_cfixed_fixed_matrix_elementwise_division_medium_200",
            "value": 1390.6538268412755,
            "unit": "iter/sec",
            "range": "stddev: 0.000009844988516517305",
            "extra": "mean: 719.0862173596395 usec\nrounds: 1394"
          },
          {
            "name": "benchmark/ci_cfixed_array_benchmarks.py::test_cfixed_matrix_elementwise_division_long_20",
            "value": 4767.019457725459,
            "unit": "iter/sec",
            "range": "stddev: 0.000005969915499275752",
            "extra": "mean: 209.77468392317851 usec\nrounds: 4771"
          },
          {
            "name": "benchmark/ci_cfixed_array_benchmarks.py::test_cfixed_fixed_matrix_elementwise_division_long_20",
            "value": 10494.32444247638,
            "unit": "iter/sec",
            "range": "stddev: 0.000006605118833410391",
            "extra": "mean: 95.28960205884647 usec\nrounds: 10004"
          },
          {
            "name": "benchmark/ci_cfixed_array_benchmarks.py::test_fixed_cfixed_matrix_elementwise_division_long_20",
            "value": 4884.023438517799,
            "unit": "iter/sec",
            "range": "stddev: 0.000006417137656019328",
            "extra": "mean: 204.74922215022778 usec\nrounds: 4641"
          },
          {
            "name": "benchmark/ci_cfixed_array_benchmarks.py::test_cfixed_matrix_elementwise_multiplication_medium_20",
            "value": 751832.0198061544,
            "unit": "iter/sec",
            "range": "stddev: 1.290374049101936e-7",
            "extra": "mean: 1.330084345513551 usec\nrounds: 75908"
          },
          {
            "name": "benchmark/ci_cfixed_array_benchmarks.py::test_cfixed_fixed_matrix_elementwise_multiplication_medium_20",
            "value": 852534.5913565533,
            "unit": "iter/sec",
            "range": "stddev: 1.4557543188065524e-7",
            "extra": "mean: 1.1729729328739606 usec\nrounds: 83389"
          },
          {
            "name": "benchmark/ci_cfixed_array_benchmarks.py::test_cfixed_matrix_elementwise_multiplication_medium_200",
            "value": 8994.344253517504,
            "unit": "iter/sec",
            "range": "stddev: 0.000016170633937783296",
            "extra": "mean: 111.18097904790787 usec\nrounds: 8639"
          },
          {
            "name": "benchmark/ci_cfixed_array_benchmarks.py::test_cfixed_fixed_matrix_elementwise_multiplication_medium_200",
            "value": 12009.546668543664,
            "unit": "iter/sec",
            "range": "stddev: 0.000004476791293609189",
            "extra": "mean: 83.26708972448372 usec\nrounds: 11591"
          },
          {
            "name": "benchmark/ci_cfixed_array_benchmarks.py::test_cfixed_matrix_negation_20",
            "value": 2433230.7793004503,
            "unit": "iter/sec",
            "range": "stddev: 6.201651067493845e-8",
            "extra": "mean: 410.97622490518484 nsec\nrounds: 190115"
          },
          {
            "name": "benchmark/ci_cfixed_array_benchmarks.py::test_cfixed_matrix_negation_200",
            "value": 37373.55376794827,
            "unit": "iter/sec",
            "range": "stddev: 0.0000026761164545971937",
            "extra": "mean: 26.756888205199377 usec\nrounds: 27139"
          },
          {
            "name": "benchmark/ci_cfixed_array_benchmarks.py::test_cfixed_matrix_negation_20_long",
            "value": 420936.3193954875,
            "unit": "iter/sec",
            "range": "stddev: 3.3455365111942783e-7",
            "extra": "mean: 2.3756562546945674 usec\nrounds: 141184"
          },
          {
            "name": "benchmark/ci_cfixed_array_benchmarks.py::test_cfixed_matrix_negation_200_long",
            "value": 4079.204637042088,
            "unit": "iter/sec",
            "range": "stddev: 0.000014722116357726406",
            "extra": "mean: 245.14582840960875 usec\nrounds: 3520"
          },
          {
            "name": "benchmark/ci_cfixed_array_benchmarks.py::test_cfixed_scalar_matrix_addition_20",
            "value": 2138021.095462293,
            "unit": "iter/sec",
            "range": "stddev: 7.889886434524277e-8",
            "extra": "mean: 467.7222325459681 nsec\nrounds: 196079"
          },
          {
            "name": "benchmark/ci_cfixed_array_benchmarks.py::test_cfixed_scalar_matrix_addition_200",
            "value": 36920.4969540763,
            "unit": "iter/sec",
            "range": "stddev: 0.000004347222940919671",
            "extra": "mean: 27.0852258907526 usec\nrounds: 23715"
          },
          {
            "name": "benchmark/ci_cfixed_array_benchmarks.py::test_cfixed_scalar_matrix_multiplication_20",
            "value": 1048245.2764618299,
            "unit": "iter/sec",
            "range": "stddev: 1.338060425182551e-7",
            "extra": "mean: 953.9752026122424 nsec\nrounds: 106987"
          },
          {
            "name": "benchmark/ci_cfixed_array_benchmarks.py::test_cfixed_fixed_scalar_matrix_multiplication_20",
            "value": 1765507.1037501388,
            "unit": "iter/sec",
            "range": "stddev: 8.688794858168696e-8",
            "extra": "mean: 566.4095023327211 nsec\nrounds: 176336"
          },
          {
            "name": "benchmark/ci_cfixed_array_benchmarks.py::test_cfixed_scalar_matrix_multiplication_200",
            "value": 15246.282045419763,
            "unit": "iter/sec",
            "range": "stddev: 0.000004067880952225296",
            "extra": "mean: 65.58976129530654 usec\nrounds: 14696"
          },
          {
            "name": "benchmark/ci_cfixed_array_benchmarks.py::test_cfixed_scalar_matrix_multiplication_medium_20",
            "value": 766187.0895478544,
            "unit": "iter/sec",
            "range": "stddev: 1.2730469182979247e-7",
            "extra": "mean: 1.3051642524936362 usec\nrounds: 77197"
          },
          {
            "name": "benchmark/ci_cfixed_array_benchmarks.py::test_cfixed_fixed_scalar_matrix_multiplication_medium_20",
            "value": 941524.2345651251,
            "unit": "iter/sec",
            "range": "stddev: 1.2021613017400568e-7",
            "extra": "mean: 1.0621075520821661 usec\nrounds: 94967"
          },
          {
            "name": "benchmark/ci_cfixed_array_benchmarks.py::test_cfixed_scalar_matrix_multiplication_medium_200",
            "value": 9455.138251742272,
            "unit": "iter/sec",
            "range": "stddev: 0.0000064487379278908405",
            "extra": "mean: 105.76259948560063 usec\nrounds: 8162"
          },
          {
            "name": "benchmark/ci_cfixed_array_benchmarks.py::test_cfixed_matrix_creation_20",
            "value": 209566.46604560173,
            "unit": "iter/sec",
            "range": "stddev: 8.230106093994242e-7",
            "extra": "mean: 4.771755800770147 usec\nrounds: 190840"
          },
          {
            "name": "benchmark/ci_cfixed_array_benchmarks.py::test_cfixed_matrix_creation_200",
            "value": 2463.4079223772796,
            "unit": "iter/sec",
            "range": "stddev: 0.000010819564138145596",
            "extra": "mean: 405.9417000798484 usec\nrounds: 2504"
          },
          {
            "name": "benchmark/ci_cfixed_array_benchmarks.py::test_cfixed_matrix_to_numpy_20",
            "value": 310001.0013486463,
            "unit": "iter/sec",
            "range": "stddev: 5.338667482775024e-7",
            "extra": "mean: 3.225796031785517 usec\nrounds: 154274"
          },
          {
            "name": "benchmark/ci_cfixed_array_benchmarks.py::test_cfixed_matrix_to_numpy_200",
            "value": 4109.895322600004,
            "unit": "iter/sec",
            "range": "stddev: 0.0000075919499219032855",
            "extra": "mean: 243.3151994166556 usec\nrounds: 4112"
          },
          {
            "name": "benchmark/ci_cfixed_array_benchmarks.py::test_cfixed_conjugate_20",
            "value": 2492068.7034174395,
            "unit": "iter/sec",
            "range": "stddev: 6.27486342887222e-8",
            "extra": "mean: 401.27304621605083 nsec\nrounds: 193051"
          },
          {
            "name": "benchmark/ci_cfixed_array_benchmarks.py::test_cfixed_conjugate_200",
            "value": 37040.94504608448,
            "unit": "iter/sec",
            "range": "stddev: 0.0000027845430555670477",
            "extra": "mean: 26.997151361982 usec\nrounds: 22020"
          },
          {
            "name": "benchmark/ci_cfixed_array_benchmarks.py::test_cfixed_conjugate_long_20",
            "value": 461811.76746395516,
            "unit": "iter/sec",
            "range": "stddev: 4.095540600231388e-7",
            "extra": "mean: 2.1653844064899257 usec\nrounds: 164718"
          },
          {
            "name": "benchmark/ci_cfixed_array_benchmarks.py::test_cfixed_conjugate_long_200",
            "value": 5115.47714643119,
            "unit": "iter/sec",
            "range": "stddev: 0.000013683978751256048",
            "extra": "mean: 195.4851857167712 usec\nrounds: 5013"
          },
          {
            "name": "benchmark/ci_cfixed_array_benchmarks.py::test_cfixed_vector_sum_20",
            "value": 173823.69744012938,
            "unit": "iter/sec",
            "range": "stddev: 9.247921332617183e-7",
            "extra": "mean: 5.752955521754639 usec\nrounds: 130311"
          },
          {
            "name": "benchmark/ci_cfixed_array_benchmarks.py::test_cfixed_convolve_20",
            "value": 964756.3141649239,
            "unit": "iter/sec",
            "range": "stddev: 1.7278762036523902e-7",
            "extra": "mean: 1.0365311792393734 usec\nrounds: 97953"
          },
          {
            "name": "benchmark/ci_cfixed_array_benchmarks.py::test_cfixed_convolve_200",
            "value": 18245.103075032515,
            "unit": "iter/sec",
            "range": "stddev: 0.0000028691248987369353",
            "extra": "mean: 54.80922721496973 usec\nrounds: 18159"
          },
          {
            "name": "benchmark/ci_cfixed_array_benchmarks.py::test_cfixed_convolve_medium_20",
            "value": 648868.3934104653,
            "unit": "iter/sec",
            "range": "stddev: 2.307869045094786e-7",
            "extra": "mean: 1.5411445682289746 usec\nrounds: 162285"
          },
          {
            "name": "benchmark/ci_cfixed_array_benchmarks.py::test_cfixed_convolve_long_20",
            "value": 29313.964267750252,
            "unit": "iter/sec",
            "range": "stddev: 0.0000026335913133792986",
            "extra": "mean: 34.113434500571785 usec\nrounds: 28840"
          },
          {
            "name": "benchmark/ci_cfixed_array_benchmarks.py::test_cfixed_scalar_matrix_division_20",
            "value": 274034.8440616984,
            "unit": "iter/sec",
            "range": "stddev: 5.008228464304753e-7",
            "extra": "mean: 3.6491709783258512 usec\nrounds: 135447"
          },
          {
            "name": "benchmark/ci_cfixed_array_benchmarks.py::test_cfixed_scalar_matrix_division_200",
            "value": 2997.353968000857,
            "unit": "iter/sec",
            "range": "stddev: 0.000007189117558314108",
            "extra": "mean: 333.6275964319854 usec\nrounds: 3028"
          },
          {
            "name": "benchmark/ci_cfixed_array_benchmarks.py::test_cfixed_scalar_matrix_division_medium_20",
            "value": 179651.24967380296,
            "unit": "iter/sec",
            "range": "stddev: 8.263195297096665e-7",
            "extra": "mean: 5.566340350071172 usec\nrounds: 109076"
          },
          {
            "name": "benchmark/ci_cfixed_array_benchmarks.py::test_cfixed_scalar_matrix_division_medium_200",
            "value": 1187.4274705620508,
            "unit": "iter/sec",
            "range": "stddev: 0.0000232421293449383",
            "extra": "mean: 842.1566999175666 usec\nrounds: 1203"
          },
          {
            "name": "benchmark/ci_cfixed_array_benchmarks.py::test_cfixed_scalar_matrix_division_long_20",
            "value": 5328.15097198859,
            "unit": "iter/sec",
            "range": "stddev: 0.000005351243332972466",
            "extra": "mean: 187.68236959824296 usec\nrounds: 5368"
          },
          {
            "name": "benchmark/ci_cfixed_array_benchmarks.py::test_cfixed_scalar_matrix_reversed_division_20",
            "value": 220053.87137067723,
            "unit": "iter/sec",
            "range": "stddev: 7.191224180958365e-7",
            "extra": "mean: 4.544341773090263 usec\nrounds: 194553"
          },
          {
            "name": "benchmark/ci_cfixed_array_benchmarks.py::test_cfixed_scalar_matrix_reversed_division_200",
            "value": 2453.6851924652883,
            "unit": "iter/sec",
            "range": "stddev: 0.000008574767709209527",
            "extra": "mean: 407.55024445302666 usec\nrounds: 2479"
          },
          {
            "name": "benchmark/ci_cfixed_array_benchmarks.py::test_cfixed_scalar_matrix_reversed_division_medium_20",
            "value": 161335.29745115832,
            "unit": "iter/sec",
            "range": "stddev: 0.0000028928995350921068",
            "extra": "mean: 6.198271647918423 usec\nrounds: 129955"
          },
          {
            "name": "benchmark/ci_cfixed_array_benchmarks.py::test_cfixed_scalar_matrix_reversed_division_medium_200",
            "value": 1129.204375540849,
            "unit": "iter/sec",
            "range": "stddev: 0.000009304216039648637",
            "extra": "mean: 885.5792818913187 usec\nrounds: 1121"
          },
          {
            "name": "benchmark/ci_cfixed_array_benchmarks.py::test_cfixed_scalar_matrix_reversed_division_long_20",
            "value": 5050.527321077474,
            "unit": "iter/sec",
            "range": "stddev: 0.000005484841373649311",
            "extra": "mean: 197.99912690832866 usec\nrounds: 5043"
          }
        ]
      }
    ]
  }
}