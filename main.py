def on_button_a():
    for index in range(1):
        for index2 in range(3):
            basic.show_leds("""
                . . . . .
                . . . . .
                . . # . .
                . . . . .
                . . . . .
                """)
            music.play_melody("C D E F G A B C5 ", 7870)
            basic.show_leds("""
                . . . . .
                . # # # .
                . # . # .
                . # # # .
                . . . . .
                """)
            music.play_melody("C D E F G A B C5 ", 7870)
            basic.show_leds("""
                # # # # #
                # . . . #
                # . . . #
                # . . . #
                # # # # #
                """)
            music.play_melody("C D E F G A B C5 ", 7870)
        game.set_score(randint(0, 787))
        if game.score() <= 78:
            basic.show_leds("""
                . . . . .
                . # . # .
                . . . . .
                # . . . #
                . # # # .
                """)
            for index3 in range(10):
                basic.set_led_color(0x00ff00)
                basic.pause(100)
                basic.set_led_color(0x999999)
                basic.pause(100)
            music.play_melody("E B C5 A B G A F ", 787)
            basic.pause(2000)
        elif game.score() <= 7:
            for index4 in range(7):
                basic.show_leds("""
                    # # # # #
                    # # # # #
                    # # # # #
                    # # # # #
                    # # # # #
                    """)
                basic.show_leds("""
                    . . . . .
                    . . . . .
                    . . . . .
                    . . . . .
                    . . . . .
                    """)
                for index5 in range(20):
                    basic.set_led_color(0x7f00ff)
                    basic.pause(100)
                    basic.set_led_color(0x999999)
                    basic.pause(100)
            basic.pause(5000)
        else:
            basic.show_leds("""
                . . . . .
                . # . # .
                . . . . .
                . # # # .
                # . . . #
                """)
            basic.set_led_color(0xff0000)
            basic.pause(1000)
            basic.set_led_color(0x999999)
            music.play_melody("B A E G F E D D ", 787)
input.on_button_event(Button.A, input.button_event_click(), on_button_a)

def on_button_b():
    for index6 in range(3):
        basic.show_leds("""
            . # # . .
            . . # . .
            . . # # .
            . . . . .
            . . # . .
            """)
        basic.show_leds("""
            # # # # #
            # # # # #
            # # # # #
            # # # # #
            # # # # #
            """)
        basic.show_leds("""
            . # # . .
            . . # . .
            . . # # .
            . . . . .
            . . # . .
            """)
        basic.show_leds("""
            # # # # #
            # # # # #
            # # # # #
            # # # # #
            # # # # #
            """)
    game.set_score(randint(1, 2))
    if game.score() == 1:
        basic.show_leds("""
            # # . # #
            # # # # #
            # # # # #
            . # # # .
            . . # . .
            """)
    else:
        basic.show_icon(IconNames.UMBRELLA)
input.on_button_event(Button.B, input.button_event_click(), on_button_b)
