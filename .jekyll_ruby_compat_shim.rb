unless String.method_defined?(:tainted?)
  class Object
    def tainted?
      false
    end
  end
end
