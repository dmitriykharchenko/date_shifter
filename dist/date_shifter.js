var date_shifter;

date_shifter = new function() {
  var date_methods, shift_date;
  date_methods = {
    "year": "FullYear",
    "month": "Month",
    "date": "Date",
    "hour": "Hours",
    "minute": "Minutes"
  };
  shift_date = function(date, quantity_ops, is_clean) {
    var method_name, name, quantity, value;
    for (name in quantity_ops) {
      quantity = quantity_ops[name];
      method_name = date_methods[name];
      value = date["get" + method_name]() + quantity;
      date = new Date(date["set" + method_name](value));
    }
    if (is_clean) {
      return new Date(date.setHours(0, 0, 0, 0));
    } else {
      return date;
    }
  };
  return {
    minutes: function(date, quantity) {
      return shift_date(new Date(date), {
        minute: quantity
      });
    },
    hours: function(date, quantity) {
      return shift_date(new Date(date), {
        hour: quantity
      });
    },
    days: function(date, quantity, is_clean) {
      return shift_date(new Date(date), {
        date: quantity
      }, is_clean);
    },
    weeks: function(date, quantity, is_clean) {
      return this.days(date, quantity * 7, is_clean);
    },
    months: function(date, quantity, is_clean) {
      return shift_date(new Date(date), {
        month: quantity
      }, is_clean);
    },
    years: function(date, quantity, is_clean) {
      return shift_date(new Date(date), {
        year: quantity
      }, is_clean);
    }
  };
};
