require "pry"
class BeerSong

  def verse(bottles)
    if bottles == 2  
      "#{bottles} bottles of beer on the wall, #{bottles} bottles of beer.\n" \
      "Take one down and pass it around, #{bottles - 1} bottle of beer on the wall.\n"
    elsif bottles == 1
        "#{bottles} bottle of beer on the wall, #{bottles} bottle of beer.\n" \
        "Take it down and pass it around, no more bottles of beer on the wall.\n"
    elsif bottles == 0
      "No more bottles of beer on the wall, no more bottles of beer.\n" \
      "Go to the store and buy some more, 99 bottles of beer on the wall.\n"
    else
      "#{bottles} bottles of beer on the wall, #{bottles} bottles of beer.\n" \
      "Take one down and pass it around, #{bottles - 1} bottles of beer on the wall.\n"
    end
  end

  def verses(start, down_to)
    # v = ""
    # until start == (down_to - 1)
    #   v << verse(start) + "\n"
    #   start -= 1
    # end
    # v

    count = (down_to..start).to_a.reverse
    count.inject("") do |sum, blah|
      sum += verse(blah) + "\n"
    end
  end

  def sing
    verses(99, 0)
  end
end
