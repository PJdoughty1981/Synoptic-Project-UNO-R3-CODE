import serial
import os
from datetime import datetime
import serial.tools.list_ports
import time

print("Arduino DATA listener Designed by Group 29 02/06/2024.")

def find_arduino_com_port(description='Arduino'):
    """Find the COM port where the Arduino with the given description is connected
       I found out it advertises itself as keyword Arduino"""
    ports = list(serial.tools.list_ports.comports())
    for port, desc, hwid in sorted(ports):
        if description in desc:
            return port
    return None


# Use the function to find the Arduino's COM port
arduino_port = find_arduino_com_port()
if arduino_port is None:
    print("System not found. Please check the connection and try again.")
else:
    print("System found! Connecting for DATA download..")
    ser = serial.Serial(arduino_port, 9600, timeout=1)

    # Path to the directory where the data will be saved
    data_dir = 'WATER DATA SAVE'

    # Listen for the specific DATA on the serial port
    try:
        while True:
            line = ser.readline().decode('utf-8').strip()  # utf-8 format 8bit
            print(line)  # Debug code
            if line == "BEGIN_OF_EEPROM_DATA":
                # Create the directory if it doesn't exist
                if not os.path.exists(data_dir):
                    os.makedirs(data_dir)

                # Create a text file with the current date and System_(number)
                system_number = ser.readline().decode('utf-8').strip()
                print(system_number)  # Print the system number to the console
                date_str = datetime.now().strftime('%Y-%m-%d')
                file_name = f"{date_str}_{system_number}.txt"
                file_path = os.path.join(data_dir, file_name)

                # Open the file for writing
                with open(file_path, 'w') as file:
                    file.write(line + '\n')  # Write "BEGIN_OF_EEPROM_DATA" to the file
                    file.write(system_number + '\n')  # Write the system number to the file
                    while True:
                        data_line = ser.readline().decode('utf-8').strip()
                        print(data_line)  # Debug code
                        file.write(data_line + '\n')  # Write the data line to the file
                        if data_line == "END_OF_EEPROM_DATA":
                            print(f"Data recording complete. File {file_name} has been created.")

                            print("Waiting for 10 seconds before exiting...")
                            time.sleep(10)  # Pause for 10 seconds

                            print("Exiting the program.")
                            exit()
    except serial.SerialException as e:
        print("There was an error with the serial connection:")
        print(e)
    except Exception as e:
        print("An unexpected error occurred:")
        print(e)
