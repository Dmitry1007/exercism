class CustomSet
  attr_accessor :data

  def initialize(data)
    @data = data
  end

  def empty?
    data.count == 0 ? true : false
  end
end
