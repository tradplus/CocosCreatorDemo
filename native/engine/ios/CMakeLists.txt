cmake_minimum_required(VERSION 3.8)

set(CMAKE_SYSTEM_NAME iOS)
set(APP_NAME "CocosCreatorDemo"  CACHE STRING "Project Name")

project(${APP_NAME} CXX)

set(CC_PROJECT_DIR ${CMAKE_CURRENT_LIST_DIR})
set(CC_UI_RESOURCES)
set(CC_PROJ_SOURCES)
set(CC_ASSET_FILES)
set(CC_COMMON_SOURCES)
set(CC_ALL_SOURCES)

include(${CC_PROJECT_DIR}/../common/CMakeLists.txt)

#添加XIB
list(APPEND CC_UI_RESOURCES
  ${CMAKE_CURRENT_LIST_DIR}/TradPlusSDK/TPNativeTemplate.xib
)

#添加代码
list(APPEND CC_PROJ_SOURCES
    ${CMAKE_CURRENT_LIST_DIR}/TradPlusSDK/TPNativeTemplate.h
    ${CMAKE_CURRENT_LIST_DIR}/TradPlusSDK/TPNativeTemplate.m
    ${CMAKE_CURRENT_LIST_DIR}/TradPlusSDK/TPCNative.h
    ${CMAKE_CURRENT_LIST_DIR}/TradPlusSDK/TPCNative.m
    ${CMAKE_CURRENT_LIST_DIR}/TradPlusSDK/TPCNativeManager.h
    ${CMAKE_CURRENT_LIST_DIR}/TradPlusSDK/TPCNativeManager.m
    ${CMAKE_CURRENT_LIST_DIR}/TradPlusSDK/TPCOfferwall.h
    ${CMAKE_CURRENT_LIST_DIR}/TradPlusSDK/TPCOfferwall.m
    ${CMAKE_CURRENT_LIST_DIR}/TradPlusSDK/TPCOfferwallManager.h
    ${CMAKE_CURRENT_LIST_DIR}/TradPlusSDK/TPCOfferwallManager.m
    ${CMAKE_CURRENT_LIST_DIR}/TradPlusSDK/TPCSplash.h
    ${CMAKE_CURRENT_LIST_DIR}/TradPlusSDK/TPCSplash.m
    ${CMAKE_CURRENT_LIST_DIR}/TradPlusSDK/TPCSplashManager.h
    ${CMAKE_CURRENT_LIST_DIR}/TradPlusSDK/TPCSplashManager.m
    ${CMAKE_CURRENT_LIST_DIR}/TradPlusSDK/TPCRewardVideo.h
    ${CMAKE_CURRENT_LIST_DIR}/TradPlusSDK/TPCRewardVideo.m
    ${CMAKE_CURRENT_LIST_DIR}/TradPlusSDK/TPCRewardVideoManager.h
    ${CMAKE_CURRENT_LIST_DIR}/TradPlusSDK/TPCRewardVideoManager.m
    ${CMAKE_CURRENT_LIST_DIR}/TradPlusSDK/TPCBanner.h
    ${CMAKE_CURRENT_LIST_DIR}/TradPlusSDK/TPCBanner.m
    ${CMAKE_CURRENT_LIST_DIR}/TradPlusSDK/TPCBannerManager.h
    ${CMAKE_CURRENT_LIST_DIR}/TradPlusSDK/TPCBannerManager.m
    ${CMAKE_CURRENT_LIST_DIR}/TradPlusSDK/TPCInterstitial.h
    ${CMAKE_CURRENT_LIST_DIR}/TradPlusSDK/TPCInterstitial.m
    ${CMAKE_CURRENT_LIST_DIR}/TradPlusSDK/TPCInterstitialManager.h
    ${CMAKE_CURRENT_LIST_DIR}/TradPlusSDK/TPCInterstitialManager.m
    ${CMAKE_CURRENT_LIST_DIR}/TradPlusSDK/TPCPluginUtil.h
    ${CMAKE_CURRENT_LIST_DIR}/TradPlusSDK/TPCPluginUtil.m
    ${CMAKE_CURRENT_LIST_DIR}/TradPlusSDK/TradplusSdkManager.h
    ${CMAKE_CURRENT_LIST_DIR}/TradPlusSDK/TradplusSdkManager.m
    ${CMAKE_CURRENT_LIST_DIR}/TradPlusSDK/TradplusSdkPlugin.h
    ${CMAKE_CURRENT_LIST_DIR}/TradPlusSDK/TradplusSdkPlugin.mm
    ${CMAKE_CURRENT_LIST_DIR}/TradPlusSDK/TTDUID2Manager.h
    ${CMAKE_CURRENT_LIST_DIR}/TradPlusSDK/TTDUID2Manager.m
    ${CMAKE_CURRENT_LIST_DIR}/TradPlusSDK/TTDUID2ManagerProtocol.h
)

set(EXECUTABLE_NAME ${APP_NAME}-mobile)

cc_ios_before_target(${EXECUTABLE_NAME})
add_executable(${EXECUTABLE_NAME} ${CC_ALL_SOURCES})
cc_ios_after_target(${EXECUTABLE_NAME})
