require 'pry'

class CustomSet
  attr_accessor :data

  def initialize(data)
    @data = data
  end

  def empty?
    data.count == 0 ? true : false
  end

  def member?(element)
    data.include?(element)
  end

  def subset?(set)
   data.all? do |element|
    set.member?(element)
   end
  end

  def disjoint?(set)
    data.all? do |element|
      set.member?(element)
    end
  end
end
