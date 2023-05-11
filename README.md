# vehiclerentapp





## Database setup
-----------------

DataBase: vehicle-booking
collections: user, vehicle, booking
user Collection: name
vehicle Collection: wheels, vehicleName, type, model:
booking Collection: userId, userName, vehicleId:






[Api Reference]
---------------


## I booking Module
-------------------

## 1. Landing page (Home)

usage: to create user
url: http://127.0.0.1:5000/
method: get
fields:  no-field
access: public

## 1. Create a user

usage: To create user
url: http://127.0.0.1:5000/bookings/user
method: post
fields: firstName, lastName
access: public


## 2. See the wheels (2 or 4 or 8)

usage: user can see the no of wheels available
url: http://127.0.0.1:5000/bookings/wheels
method: get
fields: no-field
access: private



## 3. Select the wheels (2 or 4 or 8)

usage: select the wheels
url: http://127.0.0.1:5000/bookings/wheels
method: post
fields: wheels
access: private


## 4. See the vehicle

usage: user can see the no of cars available according to wheels no.
url: http://127.0.0.1:5000/bookings/vehicle
method: get
fields:  no-field
access: private


## 5. Select the vehicle

usage: select the vehicle
url: http://127.0.0.1:5000/bookings/vehicle
method: post
fields: vehicle
access: private


## 6. See the Model

usage: user can see the no of models available according to car
url: http://127.0.0.1:5000/bookings/model
method: get
fields:  no-field
access: private



## 7. Select the Model

usage: select the Model
url: http://127.0.0.1:5000/bookings/model
method: post
fields: model
access: private


## 8. Select the Booking start date and end date

usage: Select the Booking start date and end date
url: http://127.0.0.1:5000/bookings/dates
method: post
fields: startDate, lastDate
access: private

