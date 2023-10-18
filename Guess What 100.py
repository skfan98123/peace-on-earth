import random

print("Welcome to Guess What 100! Let's see who's the chosen one!")
p1 = input("Player 1 please enter your name: ")
p2 = input("Player 2 please enter your name: ")
print("Let's begin!")
cr = random.randint(0, 100)

for x in range(5):
    p1g = int(input(f"Please type your guess, {p1}: "))
    p2g = int(input(f"Please type your guess, {p2}: "))

    if p1g == cr and p2g == cr:
        print("Draw!")
        break
    elif p1g == cr:
        print(f"Congratulations! {p1} wins!")
        break
    elif p2g == cr:
        print(f"Congratulations! {p2} wins!")
        break
    elif abs(p1g - cr) < abs(p2g - cr):
        print(f"{p1}'s guess is closer")
    elif abs(p1g - cr) > abs(p2g - cr):
        print(f"{p2}'s guess is closer")
    else:
        print("Both of you are close. Keep guessing")

print(f"The correct answer is {cr}")

if p1g != cr and p2g != cr:
    if abs(p1g - cr) < abs(p2g - cr):
        print(f"Final guess of {p1} is closer. {p1} wins!")
    elif abs(p1g - cr) > abs(p2g - cr):
        print(f"Final guess of {p2} is closer. {p2} wins!")
    else:
        print("It's a draw!")
