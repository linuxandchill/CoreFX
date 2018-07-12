class HelloWorldController < ApplicationController
  before_action(:except => [:advancedSetups, :advancedlevels, :eurgbptrading, :bigpippin])
  before_action :set_check_props, except:[:index]
  def index
    @hello_world_props = { name: "Stranger" }
    @subscriber = Subscriber.new
  end

  def candlesticks
    @candleprops = {candlestuff: "Info"}
    @user_info = {user: "John"}
  end

  def candlesticksTwo

  end

  def brokers

  end

  def pullbacks

  end

  def stoploss

  end

  def sessions

  end

  def thegreatdeception

  end

  def psychology

  end

  def manipulationphases

  end

  def megabanks

  end

  def setups

  end

  def setupsTwo

  end

  def liquidity

  end

  def levels

  end

  def riskReward

  end

  def newsreleases

  end

  def thegreatdeception

  end

##pro members
  def advancedlevels

  end

  def bigpippin

  end

  def eurgbptrading

  end

  def advancedSetups

  end


  private
    def set_check_props
      if current_user
        checkboxes = current_user.checkboxes
      else
        checkboxes = nil
      end
      @checkprops = {checked: checkboxes, user: current_user, is_pro_user: (user_signed_in? && current_user.has_role?(:pro_user)) ? true : false}
    end

end
