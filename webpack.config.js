const path = require('path');
module.exports = {
  entry: {
    '0_from_events/events.bundle': __dirname + '/0_from_events/events.js',
    '0_from_events/events.vanilla.bundle':
      __dirname + '/0_from_events/events.vanilla.js',
    '1_introduction/from_zero_to_hero/zero.bundle':
      __dirname + '/1_introduction/from_zero_to_hero/zero.js',
    '2_from_values/values.bundle': __dirname + '/2_from_values/values.js',
    '4_from_promise/promise.bundle': __dirname + '/4_from_promise/promise.js',
    '5_hot_vs_cold/cold/cold.bundle': __dirname + '/5_hot_vs_cold/cold/cold.js',
    '5_hot_vs_cold/hot/hot.bundle': __dirname + '/5_hot_vs_cold/hot/hot.js',
    '6_reactive_class/class.bundle': __dirname + '/6_reactive_class/class.js',
    '7_operators/operators.bundle': __dirname + '/7_operators/operators.js',
    '9_simple_store/store.bundle': __dirname + '/9_simple_store/store.js'
  },
  devtool: 'source-map',
  mode: 'development',
  output: {
    path: __dirname,
    filename: '[name].js'
  },
  module: {
    rules: [
      {
        test: /path.join(__dirname).*\.js$/,
        use: [
          {
            loader: 'babel-loader'
          }
        ]
      }
    ]
  }
};
