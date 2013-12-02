describe("data shifter spec", function(){
  var date = null;
  var clear_data = null;
  var date_value = 1385905593987;
  var current_month = null;
  var current_year = null;

  beforeEach(function(){
    date = new Date(date_value);
    clear_date = new Date(date).setHours(0, 0, 0, 0);
    current_month = date.getMonth();
    current_year = date.getFullYear();
  });

  describe("shifting minutes", function(){

    it('should shift forward 10 minutes', function(){
      var shifted_date = date_shifter.minutes(date, 10);
      expect(shifted_date - date).toBe(10 * 60 * 1000);
    });

    it('should shift forward 74 minutes', function(){
      var shifted_date = date_shifter.minutes(date, 74);
      expect(shifted_date - date).toBe(74 * 60 * 1000);
    });

    it('should shift backward 10 minutes', function(){
      var shifted_date = date_shifter.minutes(date, -10);
      expect(date - shifted_date).toBe(10 * 60 * 1000);
    });

  });

  describe("shifting hours", function(){

    it('should shift forward 10 hours', function(){
      var shifted_date = date_shifter.hours(date, 10);
      expect(shifted_date - date).toBe(10 * 60 * 60 * 1000);
    });

    it('should shift forward 100 hours', function(){
      var shifted_date = date_shifter.hours(date, 100);
      expect(shifted_date - date).toBe(100 * 60 * 60 * 1000);
    });

    it('should shift backward 10 hours', function(){
      var shifted_date = date_shifter.hours(date, -10);
      expect(date - shifted_date).toBe(10 * 60 * 60 * 1000);
    });

  });

  describe("shifting days", function(){

    it('should shift forward 10 days', function(){
      var shifted_date = date_shifter.days(date, 10);
      expect(shifted_date - date).toBe(10 * 24 * 60 * 60 * 1000);
    });

    it('should shift forward 10 days and clear date from hours/minutes/seconds values', function(){
      var shifted_date = date_shifter.days(date, 10, true);
      expect(shifted_date - clear_date).toBe(10 * 24 * 60 * 60 * 1000);
    });

    it('should shift forward 100 days', function(){
      var shifted_date = date_shifter.days(date, 100);
      expect(shifted_date - date).toBe(100 * 24 * 60 * 60 * 1000);
    });


    it('should shift backward 10 days', function(){
      var shifted_date = date_shifter.days(date, -10);
      expect(date - shifted_date).toBe(10 * 24 * 60 * 60 * 1000);
    });

    it('should shift backward 10 days and clear date from hours/minutes/seconds values', function(){
      var shifted_date = date_shifter.days(date, -10, true);
      expect(clear_date - shifted_date).toBe(10 * 24 * 60 * 60 * 1000);
    });
  });


  describe("shifting weeks", function(){

    it('should shift forward 10 weeks', function(){
      var shifted_date = date_shifter.weeks(date, 10);
      expect(shifted_date - date).toBe(10 * 7 * 24 * 60 * 60 * 1000);
    });

    it('should shift forward 10 weeks and clear date from hours/minutes/seconds values', function(){
      var shifted_date = date_shifter.weeks(date, 10, true);
      expect(shifted_date - clear_date).toBe(10 * 7 * 24 * 60 * 60 * 1000);
    });

    it('should shift forward 100 weeks', function(){
      var shifted_date = date_shifter.weeks(date, 100);
      expect(shifted_date - date).toBe(100 * 7 * 24 * 60 * 60 * 1000);
    });


    it('should shift backward 10 weeks', function(){
      var shifted_date = date_shifter.weeks(date, -10);
      expect(date - shifted_date).toBe(10 * 7 * 24 * 60 * 60 * 1000);
    });

    it('should shift backward 10 weeks and clear date from hours/minutes/seconds values', function(){
      var shifted_date = date_shifter.weeks(date, -10, true);
      expect(clear_date - shifted_date).toBe(10 * 7 * 24 * 60 * 60 * 1000);
    });

  });


  describe("shifting months", function(){

    it('should shift forward 10 months', function(){
      var shifted_date = date_shifter.months(date, 10);
      var date_10_months_shifted = new Date(date).setMonth(current_month + 10);

      expect(shifted_date - date_10_months_shifted).toBe(0);
    });

    it('should shift forward 10 months and clear date from hours/minutes/seconds values', function(){
      var shifted_date = date_shifter.months(date, 10, true);
      var date_10_months_shifted_clear = new Date(new Date(date).setMonth(current_month + 10)).setHours(0, 0, 0, 0);

      expect(shifted_date - date_10_months_shifted_clear).toBe(0);
    });

    it('should shift forward 100 months', function(){
      var shifted_date = date_shifter.months(date, 100);
      var date_10_months_shifted = new Date(date).setMonth(current_month + 100);

      expect(shifted_date - date_10_months_shifted).toBe(0);
    });

    it('should shift backward 10 months', function(){
      var shifted_date = date_shifter.months(date, -10);
      var date_10_months_shifted = new Date(date).setMonth(current_month - 10);

      expect(shifted_date - date_10_months_shifted).toBe(0);
    });

    it('should shift backward 10 months and clear date from hours/minutes/seconds values', function(){
      var shifted_date = date_shifter.months(date, -10, true);
      var date_10_months_shifted_clear = new Date(new Date(date).setMonth(current_month - 10)).setHours(0, 0, 0, 0);

      expect(shifted_date - date_10_months_shifted_clear).toBe(0);
    });

  });
  describe("shifting years", function(){

    it('should shift forward 10 years', function(){
      var shifted_date = date_shifter.years(date, 10);
      var date_10_years_shifted_clear = new Date(date).setFullYear(current_year + 10)

      expect(shifted_date - date_10_years_shifted_clear).toBe(0);
    });

    it('should shift forward 10 years and clear date from hours/minutes/seconds values', function(){
      var shifted_date = date_shifter.years(date, 10, true);
      var date_10_years_shifted_clear = new Date(new Date(date).setFullYear(current_year + 10)).setHours(0, 0, 0, 0);

      expect(shifted_date - date_10_years_shifted_clear).toBe(0);
    });

    it('should shift forward 100 years', function(){
      var shifted_date = date_shifter.years(date, 100);
      var date_10_years_shifted_clear = new Date(date).setFullYear(current_year + 100)

      expect(shifted_date - date_10_years_shifted_clear).toBe(0);
    });

    it('should shift backward 10 years', function(){
      var shifted_date = date_shifter.years(date, -10);
      var date_10_years_shifted_clear = new Date(date).setFullYear(current_year - 10)

      expect(shifted_date - date_10_years_shifted_clear).toBe(0);
    });

    it('should shift backward 10 years and clear date from hours/minutes/seconds values', function(){
      var shifted_date = date_shifter.years(date, -10, true);
      var date_10_years_shifted_clear = new Date(new Date(date).setFullYear(current_year - 10)).setHours(0, 0, 0, 0);

      expect(shifted_date - date_10_years_shifted_clear).toBe(0);
    });


  });
});