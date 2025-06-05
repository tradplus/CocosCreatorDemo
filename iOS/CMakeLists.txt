cmake_minimum_required(VERSION 3.8)
set(CMAKE_SYSTEM_NAME iOS)
set(APP_NAME "TradPlus_cocosCreator_300"  CACHE STRING "Project Name")
project(${APP_NAME} CXX)

include(${CMAKE_CURRENT_LIST_DIR}/../common/CMakeLists.txt)

set(LIB_NAME ${APP_NAME}-mobile)

set(UI_RESOURCES)
set(PROJ_SOURCES)
set(PROJ_COMMON_SOURCES
    ${CMAKE_CURRENT_LIST_DIR}/../common/Classes/Game.h
    ${CMAKE_CURRENT_LIST_DIR}/../common/Classes/Game.cpp
)

if(NOT EXISTS ${CMAKE_CURRENT_LIST_DIR}/../common/Classes/jsb_module_register.cpp)
    file(COPY "${COCOS_X_PATH}/cocos/bindings/manual/jsb_module_register.cpp"
        DESTINATION ${CMAKE_CURRENT_LIST_DIR}/../common/Classes/)
endif()
list(APPEND PROJ_COMMON_SOURCES ${CMAKE_CURRENT_LIST_DIR}/../common/Classes/jsb_module_register.cpp)

set(UI_RESOURCES
    ${CMAKE_CURRENT_LIST_DIR}/LaunchScreenBackground.png
    ${CMAKE_CURRENT_LIST_DIR}/Images.xcassets
    ${CMAKE_CURRENT_LIST_DIR}/Base.lproj/Localizable.strings
    ${CMAKE_CURRENT_LIST_DIR}/Base.lproj/LaunchScreen.storyboard
)


# -------------- SRART ---------------
# USED BY COCOS SERVICE, DON'T REMOVE!
if(EXISTS ${RES_DIR}/proj/service.cmake)
    set(SERVICE_NATIVE_DIR ${CMAKE_CURRENT_LIST_DIR})
    include(${RES_DIR}/proj/service.cmake)
endif()
# --------------  END ----------------

list(APPEND PROJ_SOURCES
    ${CMAKE_CURRENT_LIST_DIR}/AppDelegate.mm
    ${CMAKE_CURRENT_LIST_DIR}/AppDelegate.h
    ${CMAKE_CURRENT_LIST_DIR}/service/SDKWrapper.m
    ${CMAKE_CURRENT_LIST_DIR}/service/SDKWrapper.h
    ${CMAKE_CURRENT_LIST_DIR}/main.m
    ${CMAKE_CURRENT_LIST_DIR}/ViewController.mm
    ${CMAKE_CURRENT_LIST_DIR}/ViewController.h
    ${UI_RESOURCES}
)

list(APPEND PROJ_SOURCES
    ${CMAKE_CURRENT_LIST_DIR}/TradPlusSDK/TPNativeTemplate.h
    ${CMAKE_CURRENT_LIST_DIR}/TradPlusSDK/TPNativeTemplate.m
    ${CMAKE_CURRENT_LIST_DIR}/TradPlusSDK/TPNativeTemplate.xib
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
)

include_resources(${RES_DIR}/assets)

add_executable(${LIB_NAME} ${PROJ_SOURCES} ${ASSET_FILES} ${PROJ_COMMON_SOURCES})
source_group(TREE ${RES_DIR}/assets PREFIX "Resources" FILES ${ASSET_FILES})
source_group(TREE ${CMAKE_CURRENT_LIST_DIR} PREFIX "Source Files" FILES ${PROJ_SOURCES})
source_group(TREE ${CMAKE_CURRENT_LIST_DIR}/../common PREFIX "Source Files" FILES ${PROJ_COMMON_SOURCES})


# -------------- SRART ---------------
# USED BY COCOS SERVICE, DON'T REMOVE!
if(COMMAND service_insert_library)
    service_insert_library()
endif()
# --------------  END ----------------

target_link_libraries(${LIB_NAME} cocos2d)

target_link_libraries(${LIB_NAME} "-ObjC")
target_link_libraries(${LIB_NAME} "$(inherited)")

target_include_directories(${LIB_NAME} PRIVATE
    ${CMAKE_CURRENT_LIST_DIR}/../common/Classes
    ${CMAKE_CURRENT_LIST_DIR}/service
)

set(CMAKE_XCODE_ATTRIBUTE_FRAMEWORK_SEARCH_PATHS "$(inherited)")

set(EXECUTABLE_NAME ${LIB_NAME}) # referenced in Info.plist
set(PRODUCT_NAME ${APP_NAME})

set_target_properties(${LIB_NAME} PROPERTIES 
    MACOSX_BUNDLE_INFO_PLIST "${CMAKE_CURRENT_LIST_DIR}/Info.plist"
    MACOSX_BUNDLE 1
    RESOURCE "${UI_RESOURCES}"
    OSX_ARCHITECTURES "arm64;x86_64"
    MACOSX_DEPLOYMENT_TARGET ${TARGET_IOS_VERSION}
    XCODE_ATTRIBUTE_DEVELOPMENT_TEAM "${DEVELOPMENT_TEAM}"
    XCODE_ATTRIBUTE_CODE_SIGN_IDENTITY "iPhone Developer"
    XCODE_ATTRIBUTE_ASSETCATALOG_COMPILER_APPICON_NAME "AppIcon"
    XCODE_ATTRIBUTE_ASSETCATALOG_COMPILER_LAUNCHSTORYBOARD_NAME "LaunchScreen"
    XCODE_ATTRIBUTE_IPHONEOS_DEPLOYMENT_TARGET ${TARGET_IOS_VERSION}
    XCODE_ATTRIBUTE_ENABLE_BITCODE NO
    XCODE_ATTRIBUTE_CLANG_ENABLE_OBJC_WEAK YES
    XCODE_ATTRIBUTE_ONLY_ACTIVE_ARCH YES
    IOS_INSTALL_COMBINED YES
    XCODE_ATTRIBUTE_SKIP_INSTALL NO
    XCODE_ATTRIBUTE_INSTALL_PATH "$(LOCAL_APPS_DIR)"
)
