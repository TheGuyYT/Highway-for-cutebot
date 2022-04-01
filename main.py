def on_button_pressed_a():
    cuteBot.motors(0, 100)
input.on_button_pressed(Button.A, on_button_pressed_a)

def on_button_pressed_ab():
    cuteBot.motors(100, 100)
input.on_button_pressed(Button.AB, on_button_pressed_ab)

def on_button_pressed_b():
    cuteBot.motors(100, 0)
input.on_button_pressed(Button.B, on_button_pressed_b)
