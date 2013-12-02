date_shifter = new () ->
  date_methods = 
    "year": "FullYear",
    "month": "Month",
    "date": "Date",
    "hour": "Hours",
    "minute": "Minutes"


  shift_date = (date, quantity_ops, is_clean) ->

    for name, quantity of quantity_ops
      method_name = date_methods[name]
      value = date["get" + method_name]() + quantity
      date = new Date date["set" + method_name](value)
    
    if is_clean
      return new Date date.setHours 0, 0, 0, 0
    else
      return date

  minutes: (date, quantity) ->
    shift_date new Date(date),
      minute: quantity

  hours: (date, quantity) ->
    shift_date new Date(date),
      hour: quantity

  days: (date, quantity, is_clean) ->
    shift_date new Date(date),
      date: quantity
    , is_clean


  weeks: (date, quantity, is_clean) ->
    @days date, quantity * 7, is_clean


  months: (date, quantity, is_clean) ->
    shift_date new Date(date),
      month: quantity
    , is_clean


  years: (date, quantity, is_clean) ->
    shift_date new Date(date),
      year: quantity
    , is_clean