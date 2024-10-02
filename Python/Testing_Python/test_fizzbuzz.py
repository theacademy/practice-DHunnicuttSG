import unittest
from FizzBuzz import fizzbuzz

class TestFizzBuzz(unittest.TestCase):
    def test_fizzbuzz(self):
        self.assertEqual(fizzbuzz(45), 'FizzBuzz')
        self.assertEqual(fizzbuzz(25), 'Buzz')
        self.assertEqual(fizzbuzz(99), 'Fizz')
        self.assertEqual(fizzbuzz(13), '13')

if __name__ == '__main__':
    unittest.main()