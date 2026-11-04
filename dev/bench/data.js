window.BENCHMARK_DATA = {
  "lastUpdate": 1793781374161,
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
    ]
  }
}