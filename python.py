# Fundemental data types
int  # Integers, whole numbers (1, 2, 0, -4)
float  # Numbers with decimal (3.4, 0.1, -7.9)
bool  # Booleans, true or false (True, False)
str  # Strings, sequence of characters ("some string")
None  # Undefined

# Data structures
list  # An ordered sequence of objects ([1, 3, True, 'string'])
tuple  # Like list, but are immutable ((1, 3, True, 'string))
dict  # Dictionary, a collection of key-value paires ({"pixel": 1, "arr": [1, 2, 3], "string": "some"})
# Dict keys canbe of any data type that is not mutable (str, int, float, bool, tuple)
set  # Like dict, but looks like a list of unique objects ({1, 2, 3, 4})
# If there were two 4s in the set, when it is printed, only one will show.

# Classes are custom types
# Modules are specialized data types

# Pre-made functions, parentheses are used to call them
type  # Returns the data type/class of the given argument
range  # Returns the range of i 0 to the given int.
print  # Prints sth on the terminal
input  # Allows user to input data with the pars as the prompt
round  # Rounds given number to the closest integer
abs  # Returns the absolute value of the given number
bin  # Returns the binary represantation of a character
len  # Returns the length of a string / list /
enumerate  # Returns an iterable version of given arg

" ".join(["el1", "el2"])  # Joins the els in the given list

# To make strings appear on multiple lines, use ''' long [enter] string'''
# Template literals work by adding f at the start of a string and {} when referencing a var

# To access the index of a string, use the [] notation, of which numbers are separated with :'s.
# The 1st number indicates the starting index, the 2nd, the ending i, the 3rd the stepover count.
# If there is no int before or after the :, assumptions are made.
nums = "123456789"
(nums[4::-1])
# This will show: 54321 on the terminal.

# List unpacking
a, b, c, *other, d = [1, 2, 3, 4, 5, 6, 7, 8, 9]
# Here, a == 1, b == 2, c == 3, other = [4, 5, 6, 7, 8], d = 9

# Set methods
# Alternative for set1.intersection(set2) is set1 & set2
# Alternative for set1.union(set2) is set1 | set2

# OPERATORS
# JS: &&, Python: "and"
# JS: || Python: "or"
# JS: ! Python: "not"
# JS: === Python: "is"
# The ternary operator is in one line: if_true if condition else if_false

# LOOPS
# In for and while loops, there are 3 key words:
# break: Breaks out of the current code block
# continue: Starts the loop from the line it is initiated
# pass: Useless. Mailny used when we don't know what to type

# FUNCTIONS
# Functions are defined like this: def name_of_fn():
# Keyword args are args that you give with the param. call_fn(param1=arg1, param2=arg2)
# Docstrings are using ''' ''' to add info about a fn
# The rest operator in Python is *args
# Kwargs are symbolised as **kwargs as params
# Order rule is: params, *args, default params, **kwargs

# The walrus operator :=
un_string = "shefevsvefvvevevgershe"
if (length_of_string := len(un_string)) > 14:
    print(f"{length_of_string} characters? Too long")
