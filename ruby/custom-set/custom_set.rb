class CustomSet
  attr_accessor :data

  def initialize(data)
    @data = data
  end

  def empty?
    !@data.any?
  end

  def member?(element)
    @data.include?(element)
  end

  def subset?(set)
    @data.all? do |element|
      set.member?(element)
    end
  end

  def disjoint?(set)
    @data.none? do |element|
      set.member?(element)
    end
  end

  def ==(set)
    set.data.sort == data.sort
  end

  def add(element)
    data.push(element)
    self
  end
end
