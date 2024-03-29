$(document).ready(function () {
  function buttonPreventDefault(event) {
    event.preventDefault();
  }

  function handleSelectChange() {
    if ($(this).val() === "passport-rf") {
      $(this).prop("required", true);
      $(".doc-star").css("visibility", "visible");
      $("#series").prop("required", true);
    } else {
      $(this).prop("required", false);
      $(".doc-star").css("visibility", "hidden");
      $("#series").prop("required", false);
    }
  }

  function handlePaymentsChange() {
    let postalServiceInput = $("#postal-service-form");

    let requisitesNumberInput = $("#requisites-number");
    let requisitesOrgInput = $("#requisites-org");
    let bikInput = $("#bik");
    let innInput = $("#inn");
    let kppInput = $("#kpp");

    if ($(this).val() === "postal-service") {
      $(".postal-service__container").css("display", "flex");
      $(".requisites__container").css("display", "none");
      postalServiceInput.prop("required", true);
      requisitesNumberInput.prop("required", false);
      requisitesOrgInput.prop("required", false);
      bikInput.prop("required", false);
      innInput.prop("required", false);
      kppInput.prop("required", false);
    } else if ($(this).val() === "credit-org") {
      $(".postal-service__container").css("display", "none");
      $(".requisites__container").css("display", "flex");
      postalServiceInput.prop("required", false);
      requisitesNumberInput.prop("required", true);
      requisitesOrgInput.prop("required", true);
      bikInput.prop("required", true);
      innInput.prop("required", true);
      kppInput.prop("required", true);
    }
  }

  function handleAddressCheckboxChange() {
    let postAddressInput = $("#post-address");
    postAddressInput.prop("required", !postAddressInput.prop("required"));

    if ($(this).is(":checked")) {
      $(".post-address__container").css("display", "none");
    } else {
      $(".post-address__container").css("display", "flex");
    }
  }

  function handleAdressInputClear(event) {
    $("#reg-address").val("");
  }

  function handlePostAdressInputClear(event) {
    $("#post-address").val("");
  }

  function handleSubmit(event) {
    if ($(".person-doc").get(0).files.length === 0) {
      $(".person-doc__button").css("border-color", "red");
      $(".agreement-checkbox").css("outline", "1px solid red");
      event.preventDefault();
    }
  }

  function handleFileInputChange() {
    if ($(this).get(0).files.length > 0) {
      $(".person-doc__button").css("border-color", "");
    }
  }

  function handleCheckboxChange() {
    $(this).css("outline", "");
  }

  $(".person-doc__button").click(function () {
    $(".person-doc").click();
  });

  $(".agreement-checkbox").change(handleCheckboxChange);
  $(".person-doc").change(handleFileInputChange);
  $(".clear, .check-dir, .person-doc__button").click(buttonPreventDefault);
  $(".select-form").change(handleSelectChange);
  $('input[name="payments"]').change(handlePaymentsChange);
  $(".address-checkbox").change(handleAddressCheckboxChange);
  $(".reg-address__clear").click(handleAdressInputClear);
  $(".post-address__clear").click(handlePostAdressInputClear);
  $(".submit").click(handleSubmit);
});
