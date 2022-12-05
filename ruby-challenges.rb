# ASSESSMENT 5: Ruby Coding Practical Questions
# MINASWAN

# --------------------1) Create a method that takes in an array of words and a single letter and returns an array of all the words containing that particular letter. Use the test variables provided.

#INPUT: ['coffee', 'tea', 'juice', 'water', 'soda water']
#OUTPUT:['coffee', 'soda water'] for "o"    ||||||    ['tea', 'water', 'soda water'] for "t"

beverages_array = ['coffee', 'tea', 'juice', 'water', 'soda water']

def beverages_array letter 
    letter.select do |value|
       value letter_o
    end
   
end
p beverages_array

letter_o = 'o'
# Expected output: ['coffee', 'soda water']
letter_t = 't'
# Expected output: ['tea', 'water', 'soda water']


# -------------------2) Create a method that takes in a hash and returns one array with all the hash values at their own index and in alphabetical order. No nested arrays. Use the test variable provided.
# HINT: Google 'ruby get rid of nested arrays'

us_states = { northwest: ['Washington', 'Oregon', 'Idaho'], southwest: ['California', 'Arizona', 'Nevada'], notheast: ['Maine', 'New Hampshire', 'Rhode Island'] }
# Expected output: ['Arizona', 'California', 'Idaho', 'Maine', 'Nevada', 'New Hampshire', 'Oregon', 'Rhode Island', 'Washington'] 

p us_states.values.sort


# --------------------3a) Create a class called Bike that is initialized with a model, wheels, and current_speed. The default number of wheels is 2. The current_speed should start at 0. Create a bike_info method that returns a sentence with all the data from the bike object.

# Expected output example: 'The Trek bike has 2 wheels and is going 0 mph.'

            class Bike
                def initialize(model, wheel, current_speed)
                    @model = Trek bike
                    @wheel = 2
                    @current_speed = 0

                end
            end

            def bike_info
                "The#{@model} has #{@wheel} wheels and is going #{@current_speed} mph."
            end
            p bike_info
        
                    
# -------------------3b) Add the ability to pedal faster and brake. The pedal_faster method should increase the speed by a given amount. The brake method should decrease the speed by a given amount. The bike cannot go negative speeds.
            ## This problem tested my frustration, I am having trouble creating this so you can
            # place your own number into the faster/brake...
# Expected output example: my_bike.pedal_faster(10) => 10
# Expected output example: my_bike.pedal_faster(18) => 28
# Expected output example: my_bike.brake(5) => 23
# Expected output example: my_bike.brake(25) => 0
                class PedalSpeed
                    def initialize(faster, brake, zerobrake)
                        @faster = faster()
                        @brake = brake ()
                        @zerobrake = zerobrake ()
                    end
                end

                def pedal_faster  do |value|
                   
                        value.PedalSpeed
                    end
                    faster(100)
                end
               p pedal_faster