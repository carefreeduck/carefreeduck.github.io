console.log(data);

const maxPoints = 150;
const passiveAbilityCost = 10;
const actionAbilityCost = 10;
const minorFlawPoints = -10;
const majorFlawPoints = -20;
const fatalFlawPoints = -30;
const skillLevelMultipliers = [1, 2, 3, 4, 5];
const maxState = 10;

const curVersion = "v0.1";

const pageCount = 8;
let currentPage = 1;

let saveData = "";

let defData = {
  "Version": curVersion,
  "CharImgUrl": "portrait.jpg",
  "CharName": "",
  "CharSpecies": 0,
  "CharAge": 0,
  "CharGender": 0,
  "CharHairColour": 0,
  "CharEyeColour": 0,
  "CharHeight": 0,
  "CharBuild": 0,
  "CharWealth": 0,
  "CharMaxPoints": maxPoints,
  "PersonalityData": [],
  "Flaws": [],
  "DnaBalance": [0, 0, 0],
  "Skills": [[], [], []],
  "Abilities": [],
  "MotiveType": 0,
  "MotiveDesc": "",
  "MotiveRes": "",
  "CharBio": "",
  "CharExtBio": "",
  "Items": [],
  "StateOfExistence": 0,
  "States": [maxState, maxState, maxState],
};

let trackedData = JSON.parse(JSON.stringify(defData));

function migrateProperty(data, pname) {
  if (!data.hasOwnProperty(pname)) {
    console.log("Migrated data doesn't have property: " + pname);
  }
  else if (typeof data[pname] !== typeof trackedData[pname]) {
    console.log("Migrated data doesn't have correct property type: " + (typeof data[pname]));
  }
  else {
    trackedData[pname] = data[pname];
  }
}

function migrateTrackedData(data) {
  if (!data || typeof data !== 'object') {
    alert("Invalid data");
    return;
  }

  if (!data.hasOwnProperty('Version')) {
    alert("Invalid data");
    return;
  }

  if (data.Version !== curVersion) {
    alert("Old save");
    return;
  }

  trackedData = JSON.parse(JSON.stringify(defData));

  migrateProperty(data, "CharImgUrl");
  migrateProperty(data, "CharName");
  migrateProperty(data, "CharSpecies");
  migrateProperty(data, "CharAge");
  migrateProperty(data, "CharGender");
  migrateProperty(data, "CharHairColour");
  migrateProperty(data, "CharEyeColour");
  migrateProperty(data, "CharHeight");
  migrateProperty(data, "CharBuild");
  migrateProperty(data, "CharWealth");
  migrateProperty(data, "CharMaxPoints");
  migrateProperty(data, "PersonalityData");
  migrateProperty(data, "Flaws");
  migrateProperty(data, "DnaBalance");
  migrateProperty(data, "Skills");
  migrateProperty(data, "Abilities");
  migrateProperty(data, "MotiveType");
  migrateProperty(data, "MotiveDesc");
  migrateProperty(data, "MotiveRes");
  migrateProperty(data, "CharBio");
  migrateProperty(data, "CharExtBio");
  migrateProperty(data, "Items");
  migrateProperty(data, "StateOfExistence");
  migrateProperty(data, "States");
}

function calculatePoints() {
  let totalPoints = 0;

  for (const persData of trackedData.PersonalityData) {
    totalPoints += persData.Passives.length * passiveAbilityCost;
  }

  for (const flaw of trackedData.Flaws) {
    if (flaw.Intensity === data.FlawData.Intensities[0].Name) {
      totalPoints += minorFlawPoints;
    }
    else if (flaw.Intensity === data.FlawData.Intensities[1].Name) {
      totalPoints += majorFlawPoints;
    }
    else if (flaw.Intensity === data.FlawData.Intensities[2].Name) {
      totalPoints += fatalFlawPoints;
    }
  }

  for (let i = 0; i < trackedData.Skills.length; i++) {
    const skillGroup = trackedData.Skills[i];
    for (const skill of skillGroup) {
      let cost = data.DnaData.PointMultipliers[trackedData.DnaBalance[i] - data.DnaData.DnaMin];
      if (skill.Level === "Average") {
        cost *= skillLevelMultipliers[0];
      }
      else if (skill.Level === "Talented") {
        cost *= skillLevelMultipliers[1];
      }
      else if (skill.Level === "Elite") {
        cost *= skillLevelMultipliers[2];
      }
      else if (skill.Level === "Super") {
        cost *= skillLevelMultipliers[3];
      }
      else if (skill.Level === "Incredible") {
        cost *= skillLevelMultipliers[4];
      }

      totalPoints += cost;
    }
  }

  totalPoints += trackedData.Abilities.length * actionAbilityCost;

  $("#currentPoints").html(totalPoints);
}

function buildMcs() {
  $("#mcsImage").html('<img src="' + trackedData.CharImgUrl + '" class="img-thumbnail img-fluid" alt="">');
  $("#mcsName").html(trackedData.CharName);
  $("#mcsBio").html(trackedData.CharBio);
  $("#mcsExtBio").html(trackedData.CharExtBio);

  $("#mcsWealth").html(data.Customization.Wealth[trackedData.CharWealth]);
  $("#mcsAge").html(data.Customization.Age[trackedData.CharAge]);
  $("#mcsHair").html(data.Customization.HairColor[trackedData.CharHairColour]);
  $("#mcsHeight").html(data.Customization.Height[trackedData.CharHeight]);
  $("#mcsSpecies").html(data.Customization.Species[trackedData.CharSpecies]);
  $("#mcsGender").html(data.Customization.Gender[trackedData.CharGender]);
  $("#mcsEye").html(data.Customization.EyeColor[trackedData.CharEyeColour]);
  $("#mcsBuild").html(data.Customization.Build[trackedData.CharBuild]);

  $("#mcsCharTraits").html("");
  for (let i = 0; i < trackedData.PersonalityData.length; i++) {
    const persData = trackedData.PersonalityData[i];
    for (const trait of persData.CharTraits) {
      $("#mcsCharTraits").append('<div class="row"><div class="col">' + data.PersTraits[i].Options[persData.Selected].CharTraits[trait] + '</div></div>');
    }
  }

  $("#mcsMotive").html(data.Motives[trackedData.MotiveType].Motive);
  $("#mcsMotiveDesc").html(trackedData.MotiveDesc);
  $("#mcsMotiveRes").html(trackedData.MotiveRes);

  $("#mcsPers").html("");
  for (let i = 0; i < trackedData.PersonalityData.length; i++) {
    const persData = trackedData.PersonalityData[i];
    let cont = "";
    cont += '<div class="col-sm-6 col-md-4 col-lg">';
    cont += '<h5>' + data.PersTraits[i].Options[persData.Selected].Name + '</h5>';
    cont += '<hr class="m-0" />';
    
    if (persData.Passives.length > 0) {
      cont += '<ul>';
      cont += '';
      for (const passive of persData.Passives) {
        cont += '<li>' + data.PersTraits[i].Options[persData.Selected].Abilities[passive].Name + '</li>';
      }
      cont += '</ul>';
    }
    else {
      cont += '<small class="text-secondary">No passives</small>';
    }
    
    cont += '</div>';
    
    $("#mcsPers").append(cont);
  }

  $("#mcsFlaws").html(trackedData.Flaws.length > 0 ? "" : "No flaws");
  for (let i = 0; i < trackedData.Flaws.length; i++) {
    const flaw = trackedData.Flaws[i];
    let cont = "";
    cont += '<div class="row mb-2">';
    cont += '<div class="col-12 col-md-auto">';
    cont += '<strong>' + flaw.Name + '</strong> <small class="text-secondary">(' + flaw.Category + ' - ' + flaw.Dna + ' - ' + flaw.Intensity + ')</small>';
    cont += '</div>';
    cont += '<div class="col">';
    cont += flaw.Effect;
    cont += '</div>';
    cont += '</div>';
    
    $("#mcsFlaws").append(cont);
  }

  $("#mcsProgBalance").html("(" + trackedData.DnaBalance[0] + ")");
  $("#mcsSenBalance").html("(" + trackedData.DnaBalance[1] + ")");
  $("#mcsIntBalance").html("(" + trackedData.DnaBalance[2] + ")");
  
  $("#mcsProgSkills").html("");
  if (trackedData.Skills[0].length > 0) {
    let cont = "";
    cont += '<ul>';
    for (const skill of trackedData.Skills[0]) {
      cont += '<li>' + data.DnaData.Skills[0][skill.Index].Name + ' <small class="text-secondary">' + skill.Level + '</small></li>';
    }
    cont += '</ul>';
    $("#mcsProgSkills").html(cont);
  }
  else {
    $("#mcsProgSkills").html('<small class="text-secondary">No Skills</small>');
  }
  
  $("#mcsSenSkills").html("");
  if (trackedData.Skills[1].length > 0) {
    let cont = "";
    cont += '<ul>';
    for (const skill of trackedData.Skills[1]) {
      cont += '<li>' + data.DnaData.Skills[1][skill.Index].Name + ' <small class="text-secondary">' + skill.Level + '</small></li>';
    }
    cont += '</ul>';
    $("#mcsSenSkills").html(cont);
  }
  else {
    $("#mcsSenSkills").html('<small class="text-secondary">No Skills</small>');
  }
  
  $("#mcsIntSkills").html("");
  if (trackedData.Skills[2].length > 0) {
    let cont = "";
    cont += '<ul>';
    for (const skill of trackedData.Skills[2]) {
      cont += '<li>' + data.DnaData.Skills[2][skill.Index].Name + ' <small class="text-secondary">' + skill.Level + '</small></li>';
    }
    cont += '</ul>';
    $("#mcsIntSkills").html(cont);
  }
  else {
    $("#mcsIntSkills").html('<small class="text-secondary">No Skills</small>');
  }
  
  let abilities = [[], [], []];
  for (const ability of trackedData.Abilities) {
    abilities[ability.Type].push(ability.Index);
  }

  $("#mcsProgAbilities").html("");
  if (abilities[0].length > 0) {
    let cont = "";
    cont += '<ul>';
    for (const ability of abilities[0]) {
      cont += '<li>' + data.Abilities[0][ability].Name + '</li>';
    }
    cont += '</ul>';
    $("#mcsProgAbilities").html(cont);
  }
  else {
    $("#mcsProgAbilities").html('<small class="text-secondary">No Abilities</small>');
  }

  $("#mcsSenAbilities").html("");
  if (abilities[1].length > 0) {
    let cont = "";
    cont += '<ul>';
    for (const ability of abilities[1]) {
      cont += '<li>' + data.Abilities[1][ability].Name + '</li>';
    }
    cont += '</ul>';
    $("#mcsSenAbilities").html(cont);
  }
  else {
    $("#mcsSenAbilities").html('<small class="text-secondary">No Abilities</small>');
  }

  $("#mcsIntAbilities").html("");
  if (abilities[2].length > 0) {
    let cont = "";
    cont += '<ul>';
    for (const ability of abilities[2]) {
      cont += '<li>' + data.Abilities[2][ability].Name + '</li>';
    }
    cont += '</ul>';
    $("#mcsIntAbilities").html(cont);
  }
  else {
    $("#mcsIntAbilities").html('<small class="text-secondary">No Abilities</small>');
  }

  $("#mcsItems").html(trackedData.Items.length > 0 ? "" : "No Items");
  for (let i = 0; i < trackedData.Items.length; i++) {
    const item = trackedData.Items[i];
    let cont = "";
    cont += '<div class="row mb-2">';
    cont += '<div class="col-12 col-md-auto">';
    cont += '<strong>' + item.Name + '</strong>';
    cont += '</div>';
    cont += '<div class="col">';
    cont += '<small class="text-secondary">' + item.Desc + '</small>';
    cont += '</div>';
    cont += '</div>';
    
    $("#mcsItems").append(cont);
  }
}

function fillPointData() {
  $("#minorFlawPoints").html(minorFlawPoints);
  $("#majorFlawPoints").html(majorFlawPoints);
  $("#fatalFlawPoints").html(fatalFlawPoints);
}

function fillInitialItems() {
  fillPointData();

  $("#maxPoints").html(trackedData.CharMaxPoints);
  $("#charImgUrl").val(trackedData.CharImgUrl);
  $("#charName").val(trackedData.CharName);
  $("#charMaxPoints").val(trackedData.CharMaxPoints);

  $("#dnaBalance").html(trackedData.DnaBalance[0] + trackedData.DnaBalance[1] + trackedData.DnaBalance[2]);
  $("#phsicalityRange").val(trackedData.DnaBalance[0]);
  $("#phsicalityRangeVal").html(trackedData.DnaBalance[0]);
  $("#emoFortidueRange").val(trackedData.DnaBalance[1]);
  $("#emoFortidueRangeVal").html(trackedData.DnaBalance[1]);
  $("#intellectRange").val(trackedData.DnaBalance[2]);
  $("#intellectRangeVal").html(trackedData.DnaBalance[2]);

  $("#motiveDesc").val(trackedData.MotiveDesc);
  $("#motiveRes").val(trackedData.MotiveRes);

  $("#charBio").val(trackedData.CharBio);
  $("#charExtBio").val(trackedData.CharExtBio);
}

function placeImage() {
  $("#imgContainer").html('<img src="' + trackedData.CharImgUrl + '" class="img-thumbnail" alt="">');
}

function fillCustomization(id, dataId, trackedId) {
  id = "#" + id;
  const sel = trackedData[trackedId];
  $(id).html("");
  for (let i = 0; i < data.Customization[dataId].length; i++) {
    const item = data.Customization[dataId][i];
    $(id).append('<option ' + (sel === i ? "selected" : "") + '>' + item + '</option>');
  }
}

function fillCustomizations() {
  fillCustomization("species", "Species", "CharSpecies");
  fillCustomization("charAge", "Age", "CharAge");
  fillCustomization("gender", "Gender", "CharGender");
  fillCustomization("hairColor", "HairColor", "CharHairColour");
  fillCustomization("eyeColor", "EyeColor", "CharEyeColour");
  fillCustomization("height", "Height", "CharHeight");
  fillCustomization("build", "Build", "CharBuild");
  fillCustomization("wealth", "Wealth", "CharWealth");
  fillCustomization("stateOfExistence", "StateOfExistence", "StateOfExistence");
}

function fillPersonalityTrackedData() {
  trackedData.PersonalityData = [];
  for (const persTrait of data.PersTraits) {
    trackedData.PersonalityData.push({"Selected": 0, "Passives": [], "CharTraits": []});
  }
}

function buildPersonalityControls(container) {
  $(container).html("");

  for (let p = 0; p < data.PersTraits.length; p++) {
    const persTrait = data.PersTraits[p];
    let traitCont = "";
    traitCont += '<div class="mb-3">';
    traitCont += '<div><label class="form-label help-desc-button" data-target="' + persTrait.Id + 'Desc">' + persTrait.Name + ' <i class="bi-question-octagon-fill"></i></label></div>';
    traitCont += '<div id="' + persTrait.Id + 'Desc" class="card toggle-desc">';
    traitCont += '<div class="card-body"><small>' + persTrait.Description + '</small></div>';
    traitCont += '</div>';
    
    for (let i = 0; i < persTrait.Options.length; i++) {
      const traitOption = persTrait.Options[i];
      const checkedText = i == trackedData.PersonalityData[p].Selected ? "checked" : "";
      traitCont += '<div class="form-check form-check-inline">';
      traitCont += '<input class="form-check-input ' + persTrait.Id + '-radio" type="radio" name="' + persTrait.Id + 'Options" id="' + traitOption.Id + 'Option" value="' + i + '" ' + checkedText + '>';
      traitCont += '<label class="form-check-label" for="' + traitOption.Id + 'Option">' + traitOption.Name + '</label>';
      traitCont += '</div>';
    }
    
    traitCont += '</div>';

    for (let i = 0; i < persTrait.Options.length; i++) {
      const traitOption = persTrait.Options[i];
      const isSelected = i == trackedData.PersonalityData[p].Selected;
      const hiddenClass = isSelected ? "" : "hidden-at-start";
      traitCont += '<div class="mb-3">';
      traitCont += '<div id="' + traitOption.Id + 'Traits" class="trait-card card ' + hiddenClass + '">';
      traitCont += '<div class="card-body">';
      traitCont += '<label>Passive Abilities <small class="text-secondary">Each ability costs ' + passiveAbilityCost + ' points</small></label>';
      traitCont += '<hr class="m-0" />';
      
      for (let i = 0; i < traitOption.Abilities.length; i++) {
        const traitAbility = traitOption.Abilities[i];
        const isSelected = trackedData.PersonalityData[p].Passives.includes(i);
        traitCont += '<div class="row m-0">';
        traitCont += '<div class="col-12 col-md-auto form-check">';
        traitCont += '<input class="form-check-input" type="checkbox" value="" id="' + traitOption.Id + 'Trait' + i + '" aria-describedby="' + traitOption.Id + 'Trait' + i + 'Help" ' + (isSelected ? "checked" : "") + '>';
        traitCont += '<label class="form-check-label" for="' + traitOption.Id + 'Trait' + i + '">' + traitAbility.Name + '</label>';
        traitCont += '</div>';
        traitCont += '<div id="' + traitOption.Id + 'Trait' + i + 'Help" class="col trait-help">' + traitAbility.Description + '</div>';
        traitCont += '</div>';
      }

      if (traitOption.CharTraits.length > 0) {
        traitCont += '<label class="mt-3">Character Traits <small class="text-secondary">Pick traits that best describe your character</small></label>';
        traitCont += '<hr class="m-0" />';
        traitCont += '<div class="row m-0">';
        traitCont += '<div class="g-0">';
        for (let i = 0; i < traitOption.CharTraits.length; i++) {
          const charTrait = traitOption.CharTraits[i];
          const isSelected = trackedData.PersonalityData[p].CharTraits.includes(i);
          traitCont += '<div class="form-check form-check-inline">';
          traitCont += '<input class="form-check-input" type="checkbox" id="' + traitOption.Id + 'CharTrait' + i + '" ' + (isSelected ? "checked" : "") + '>';
          traitCont += '<label class="form-check-label" for="' + traitOption.Id + 'CharTrait' + i + '">' + charTrait + '</label>';
          traitCont += '</div>';
        }
        traitCont += '</div>';
        traitCont += '</div>';
      }

      traitCont += '</div>';
      traitCont += '</div>';
      traitCont += '</div>';
    }
    
    $(container).append(traitCont);
  }
}

function selectPersonality(persIndex, optionIndex) {
  let personalityData = trackedData.PersonalityData;
  personalityData[persIndex].Selected = optionIndex;
  personalityData[persIndex].Passives = [];
  onTrackedDataChange("PersonalityData", personalityData);
}

function selectedTraitChanged(persIndex, optionIndex, traitIndex, isChecked) {
  let personalityData = trackedData.PersonalityData;
  if (personalityData[persIndex].Selected !== optionIndex) {
    return;
  }

  let index = -1;
  for (let i = 0; i < personalityData[persIndex].Passives.length; i++) {
    if (personalityData[persIndex].Passives[i] === traitIndex) {
      index = i;
      break;
    }
  }
  
  if (isChecked && index < 0) {
    personalityData[persIndex].Passives.push(traitIndex);
  }
  else if (!isChecked && index >= 0) {
    personalityData[persIndex].Passives.splice(index, 1);
  }

  onTrackedDataChange("PersonalityData", personalityData);
}

function selectedCharTraitChanged(persIndex, optionIndex, traitIndex, isChecked) {
  let personalityData = trackedData.PersonalityData;
  if (personalityData[persIndex].Selected !== optionIndex) {
    return;
  }

  let index = -1;
  for (let i = 0; i < personalityData[persIndex].CharTraits.length; i++) {
    if (personalityData[persIndex].CharTraits[i] === traitIndex) {
      index = i;
      break;
    }
  }
  
  if (isChecked && index < 0) {
    personalityData[persIndex].CharTraits.push(traitIndex);
  }
  else if (!isChecked && index >= 0) {
    personalityData[persIndex].CharTraits.splice(index, 1);
  }

  onTrackedDataChange("PersonalityData", personalityData);
}

function bindPersonalityEvents() {
  for (let p = 0; p < data.PersTraits.length; p++) {
    const persTrait = data.PersTraits[p];

    $("." + persTrait.Id + "-radio").change(function() {
      const value = parseInt(this.value);
      selectPersonality(p, value);
      
      for (let i = 0; i < persTrait.Options.length; i++) {
        const traitOption = persTrait.Options[i];

        $("#" + traitOption.Id + "Traits").find("input[type=checkbox]").prop('checked', false);
        if (value === i) {
          $("#" + traitOption.Id + "Traits").show();
        }
        else {
          $("#" + traitOption.Id + "Traits").hide();
        }
      }
    });

    for (let o = 0; o < persTrait.Options.length; o++) {
      const option = persTrait.Options[o];
      for (let i = 0; i < option.Abilities.length; i++) {
        $("#" + option.Id + "Trait" + i).change(function() {
          selectedTraitChanged(p, o, i, this.checked);
        });
      }

      for (let i = 0; i < option.CharTraits.length; i++) {
        $("#" + option.Id + "CharTrait" + i).change(function() {
          selectedCharTraitChanged(p, o, i, this.checked);
        });
      }
    }
  }

  $('.help-desc-button').click(function() {
    const id = "#" + $(this).data("target");
    $(".toggle-desc:not(" + id + ")").hide();
    $(id).toggle();
  });
}

function buildFlawControls() {
  $("#flawCategory").html("");
  for (const category of data.FlawData.Categories) {
    $("#flawCategory").append('<option>' + category + '</option>');
  }

  $("#flawDna").html("");
  for (const dna of data.FlawData.Dnas) {
    $("#flawDna").append('<option>' + dna + '</option>');
  }

  let effects = [];
  $("#flawIntensity").html("");
  for (const intensity of data.FlawData.Intensities) {
    $("#flawIntensity").append('<option>' + intensity.Name + '</option>');
    if (effects.length === 0) {
      effects = intensity.Effects;
    }
  }

  $("#flawEffect").html("");
  for (const effect of effects) {
    $("#flawEffect").append('<option>' + effect + '</option>');
  }
}

function fillFlaws() {
  $("#flawList").html("");
  for (let i = 0; i < trackedData.Flaws.length; i++) {
    const flaw = trackedData.Flaws[i];
    let rowCont = "";
    rowCont += '<div class="mt-1 card">';
    rowCont += '<div class="card-body p-2">';
    rowCont += '<label>';
    rowCont += '<button class="btn btn-sm btn-danger delete-button" onclick="deleteFlaw(' + i + ')"><i class="bi-trash"></i></button>';
    rowCont += ' ' + flaw.Name + ' ';
    rowCont += '<small class="text-secondary">(' + flaw.Category + ' - ' + flaw.Dna + ' - ' + flaw.Intensity + ')</small>';
    rowCont += '</label>';
    rowCont += '<hr class="m-0" />';
    rowCont += flaw.Effect;
    rowCont += '</div>';
    rowCont += '</div>';
    $("#flawList").append(rowCont);
  }
}

function addFlaw() {
  const flawName = $("#flawName").val();
  const flawCategory = $("#flawCategory").val();
  const flawDna = $("#flawDna").val();
  const flawIntensity = $("#flawIntensity").val();
  const flawEffect = $("#flawEffect").val();
  
  let flaws = trackedData.Flaws;
  flaws.push({"Name": flawName, "Category": flawCategory, "Dna": flawDna, "Intensity": flawIntensity, "Effect": flawEffect});
  onTrackedDataChange("Flaws", flaws);
  fillFlaws();
}

function deleteFlaw(index) {
  let flaws = trackedData.Flaws;
  flaws.splice(index, 1);
  onTrackedDataChange("Flaws", flaws);
  fillFlaws();
}

function bindFlawEvents() {
  $("#addFlawButton").click(function() {
    addFlaw();
  });

  $("#flawIntensity").change(function() {
    const value = $(this).val();
    let effects = [];
    for (const intensity of data.FlawData.Intensities) {
      if (intensity.Name === value) {
        effects = intensity.Effects;
      }
    }

    $("#flawEffect").html("");
    for (const effect of effects) {
      $("#flawEffect").append('<option>' + effect + '</option>');
    }
  });
}

function fillDnaSkillOptions(index) {
  let skillsCont = "";
  for(let i = 0; i < data.DnaData.Skills[index].length; i++) {
    let isPicked = false;
    const skills = trackedData.Skills;
    for (const skill of skills[index]) {
      if (skill.Index == i) {
        isPicked = true;
        break;
      }
    }
    
    if (isPicked) {
      continue;
    }
    
    const skill = data.DnaData.Skills[index][i];
    skillsCont += '<option value="' + i + '">' + skill.Name + '</option>';
  }
  
  $("#dnaSkill").html(skillsCont);
}

function bindSkillEvents() {
  $("#dnaType").change(function() {
    const index = parseInt($(this).val());
    fillDnaSkillOptions(index);
  });

  $(".dnaRange").change(function() {
    dnaBalanceChanged();
  });

  $("#addSkillButton").click(function() {
    addSkill();
  });
}

function fillDnaSkills(index) {
  for (let s = 0; s < 3; s++) {
    const id = s == 0 ? "#physSkills" : ( s == 1 ? "#emoSkills" : "#intSkills" );
    
    $(id).html("");
    const skills = trackedData.Skills;
    for (let i = 0; i < skills[s].length; i++) {
      const skill = skills[s][i];
      let skillCont = "";
      skillCont += '<div class="col-sm-6 col-md-4">';
      skillCont += '<div class="mt-1 card">';
      skillCont += '<div class="card-body p-2">';
      skillCont += '<label>';
      skillCont += '<button class="btn btn-sm btn-danger delete-button" onclick="deleteSkill(' + s + ', ' + i + ')"><i class="bi-trash"></i></button>';
      skillCont += ' ' + data.DnaData.Skills[s][skill.Index].Name + ' ';
      skillCont += '<small class="text-secondary">(' + skill.Level + ')</small>';
      skillCont += '</label>';
      skillCont += '<hr class="m-0" />';
      skillCont += data.DnaData.Skills[s][skill.Index].Description;
      skillCont += '</div>';
      skillCont += '</div>';
      skillCont += '</div>';
      $(id).append(skillCont);
    }
  }
}

function addSkill() {
  const typeIndex = parseInt($("#dnaType").val());
  const level = $("#dnaSkillLevel").val();
  const skillIndex = parseInt($("#dnaSkill").val());
  
  let skills = trackedData.Skills;
  skills[typeIndex].push({"Index": skillIndex, "Level": level});
  onTrackedDataChange("Skills", skills);
  fillDnaSkills();
  fillDnaSkillOptions(typeIndex);
}

function deleteSkill(type, index) {
  let skills = trackedData.Skills;
  skills[type].splice(index, 1);
  onTrackedDataChange("Skills", skills);
  fillDnaSkills();

  const typeIndex = parseInt($("#dnaType").val());
  fillDnaSkillOptions(typeIndex);
}

function checkSelectedAbilities() {
  let abilities = trackedData.Abilities;
  let altered = [];
  for (let i = 0; i < abilities.length; i++) {
    const selected = abilities[i];
    const ability = data.Abilities[selected.Type][selected.Index];
    let isSatisfied = true;
    for (const req of ability.Required) {
      if (!isPersTraitPicked(req[0], req[1], req[2])) {
        isSatisfied = false;
        break;
      }
    }
    
    if (isSatisfied) {
      for (const dis of ability.Disallowed) {
        if (isPersTraitPicked(dis[0], dis[1], dis[2])) {
          isSatisfied = false;
          break;
        }
      }
    }
    
    if (isSatisfied) {
      altered.push(selected);
    }
  }

  if (altered.length !== abilities.length) {
    onTrackedDataChange("Abilities", altered);
  }
}

function fillSelectedAbilities() {
  const id = "#selectedAbilities";
  $(id).html("");
  const abilities = trackedData.Abilities;
  for (let i = 0; i < abilities.length; i++) {
    const selected = abilities[i];
    const ability = data.Abilities[selected.Type][selected.Index];
    let abilityCont = "";
    abilityCont += '<div class="col-sm-6 col-md-4">';
    abilityCont += '<div class="mt-1 card">';
    abilityCont += '<div class="card-body p-2">';
    abilityCont += '<h6 class="card-title">';
    abilityCont += '<button class="btn btn-sm btn-danger delete-button" onclick="deleteAbility(' + i + ')"><i class="bi-trash"></i></button>';
    abilityCont += ' ' + ability.Name + ' ';
    abilityCont += '<button class="btn btn-sm btn-light expand-button"><i class="bi-chevron-bar-expand"></i></button>';
    abilityCont += '</h6>';
    abilityCont += '<small class="long-desc shortened-desc">' + ability.Description + '</small>';
    abilityCont += '</div>';
    abilityCont += '</div>';
    abilityCont += '</div>';
    $(id).append(abilityCont);
  }

  bindAbilityEvents();
}

function isPersTraitPicked(persIndex, optionIdex, traitIndex) {
  if (trackedData.PersonalityData[persIndex].Selected !== optionIdex) {
    return false;
  }
  
  if (traitIndex < 0) {
    return true;
  }
  
  for (const passive of trackedData.PersonalityData[persIndex].Passives) {
    if (passive === traitIndex) {
      return true;
    }
  }
  
  return false;
}

function fillAbilities() {
  for (let s = 0; s < 3; s++) {
    const id = s == 0 ? "#physAbilityOptions" : ( s == 1 ? "#emoAbilityOptions" : "#intAbilityOptions" );
    
    $(id).html("");
    const abilities = trackedData.Abilities;
    for (let i = 0; i < data.Abilities[s].length; i++) {
      let isSelected = false;
      for (const selected of abilities) {
        if (s === selected.Type && i === selected.Index) {
          isSelected = true;
          break;
        }
      }
      
      if (isSelected) {
        continue;
      }

      const ability = data.Abilities[s][i];
      let isSatisfied = true;
      for (const req of ability.Required) {
        if (!isPersTraitPicked(req[0], req[1], req[2])) {
          isSatisfied = false;
          break;
        }
      }
      
      if (isSatisfied) {
        for (const dis of ability.Disallowed) {
          if (isPersTraitPicked(dis[0], dis[1], dis[2])) {
            isSatisfied = false;
            break;
          }
        }
      }

      let abilityCont = "";
      abilityCont += '<div class="col-sm-6 col-md-4">';
      abilityCont += '<div class="mt-1 card">';
      abilityCont += '<div class="card-body p-2">';
      abilityCont += '<h6 class="card-title">';
      abilityCont += '<button class="btn btn-sm btn-light add-button" ' + (isSatisfied ? "" : "disabled") + ' onclick="addAbility(' + s + ', ' + i + ')"><i class="bi-plus-square"></i></button>';
      abilityCont += ' ' + ability.Name + ' ';
      if (!isSatisfied) {
        abilityCont += '<small class="text-secondary">Requirements not met</small>';
      }
      abilityCont += '<button class="btn btn-sm btn-light expand-button"><i class="bi-chevron-bar-expand"></i></button>';
      abilityCont += '</h6>';
      abilityCont += '<small class="long-desc shortened-desc">' + ability.Description + '</small>';
      abilityCont += '<hr class="m-0" />';

      for (const req of ability.Required) {
        let isValid = false;
        let reqCont = "";
        if (req[2] < 0) {
          reqCont = data.PersTraits[req[0]].Options[req[1]].Name;
        }
        else {
          reqCont = data.PersTraits[req[0]].Options[req[1]].Abilities[req[2]].Name;
        }

        abilityCont += '<small class="text-primary me-2">' + reqCont + '</small> ';
      }
      
      for (const dis of ability.Disallowed) {
        let disCont = "";
        if (dis[2] < 0) {
          disCont = data.PersTraits[dis[0]].Options[dis[1]].Name;
        }
        else {
          disCont = data.PersTraits[dis[0]].Options[dis[1]].Abilities[dis[2]].Name;
        }

        abilityCont += '<small class="text-danger me-2">' + disCont + '</small> ';
      }
      
      abilityCont += '&nbsp;';
      abilityCont += '</div>';
      abilityCont += '</div>';
      abilityCont += '</div>';
      $(id).append(abilityCont);
    }
  }

  bindAbilityEvents();
}

function bindAbilityEvents() {
  $(".expand-button").off('click').click(function() {
    $(this).parent().parent().children(".long-desc").toggleClass("shortened-desc");
  });
}

function addAbility(type, index) {
  let abilities = trackedData.Abilities;
  abilities.push({"Type":type, "Index":index});
  onTrackedDataChange("Abilities", abilities);
  fillSelectedAbilities();
  fillAbilities();
}

function deleteAbility(index) {
  let abilities = trackedData.Abilities;
  abilities.splice(index, 1);
  onTrackedDataChange("Abilities", abilities);
  fillSelectedAbilities();
  fillAbilities();
}

function fillMotives() {
  let options = "";
  for (let i = 0; i < data.Motives.length; i++) {
    const motive = data.Motives[i];
    options += '<option ' + (trackedData.MotiveType === i ? "selected" : "") + ' >' + motive.Motive + '</option>'
  }
  
  $("#motiveType").html(options);
}

function fillItems() {
  $("#items").html("");
  if (trackedData.Items.length > 0) {
    for (let i = 0; i < trackedData.Items.length; i++) {
      const item = trackedData.Items[i];
      let cont = "";
      cont += '<div class="col-sm-6 col-md-4">';
      cont += '<div class="mt-1 card">';
      cont += '<div class="card-body p-2">';
      cont += '<button class="btn btn-sm btn-danger delete-button" onclick="deleteItem(' + i + ')"><i class="bi-trash"></i></button> ';
      cont += item.Name;
      cont += '<hr class="m-0">';
      cont += item.Desc;
      cont += '</div>';
      cont += '</div>';
      cont += '</div>';
      
      $("#items").append(cont);
    }
  }
  else {
    $("#items").html('<small class="text-secondary">No Items</small>');
  }
}

function addItem(name, desc) {
  let items = trackedData.Items;
  items.push({"Name": name, "Desc": desc});
  onTrackedDataChange("Items", items);
  fillItems();
}

function deleteItem(index) {
  let items = trackedData.Items;
  items.splice(index, 1);
  onTrackedDataChange("Items", items);
  fillItems();
}

function buildStates() {
  for (let i = 0; i < trackedData.States.length; i++) {
    const val = trackedData.States[i];
    const id = "#stateBar" + i;
    $(id).html("" + val);
    $(id).attr("aria-valuenow", "" + val);
    $(id).css("width", (val * 100 / maxState) + "%");
  }
}

function onStateChanged(index, change) {
  const final = trackedData.States[index] + change;
  if(final < 0 || final > maxState) {
    return;
  }

  let states = trackedData.States;
  states[index] = final;
  onTrackedDataChange("States", states);
}

function showPage(number, onEnd) {
  if (number === 5) {
    fillSelectedAbilities();
    fillAbilities();
  }
  else if (number === 8) {
    buildMcs();
  }
  
  for (let i = 1; i <= pageCount; i++) {
    if (i == number) {
      $( "#row" + i ).delay(500).animate({
        opacity: 1.0,
      }, 500, function() {
        // Animation complete.
      });
    }
    else {
      $( "#row" + i ).animate({
        opacity: 0.0,
      }, 500, function() {
        // Animation complete.
      });
    }
  }

  const offset = 100 * (number - 1);
  $( ".page-container" ).animate({
    marginLeft: "-" + offset + "%",
    marginRight: offset + "%"
  }, 1000, function() {
    if (onEnd !== undefined) {
      onEnd();
    }
  });
  
  currentPage = number;
}

function onTraitSelectChanged(selectElement) {
  let totalSelected = 0;
  $(selectElement).children().map(function() {
    if ($(this).is(':selected')) {
      totalSelected++;
    }
  });
  
  if (totalSelected < 2) {
    $(selectElement).children().map(function() {
      $(this).prop("disabled", false);
    });
  }
  else {
    $(selectElement).children().map(function() {
      if (!$(this).is(':selected')) {
        $(this).prop("disabled", true);
      }
    });
  }
}

function dnaBalanceChanged() {
  const phys = parseInt($("#phsicalityRange").val());
  const emoFort = parseInt($("#emoFortidueRange").val());
  const intel = parseInt($("#intellectRange").val());
  
  onTrackedDataChange("DnaBalance", [phys, emoFort, intel]);
  
  $("#phsicalityRangeVal").html(phys);
  $("#emoFortidueRangeVal").html(emoFort);
  $("#intellectRangeVal").html(intel);
  $("#dnaBalance").html((phys + emoFort + intel));
}

function toggle(identifier) {
  $(identifier).toggle();
}

function setTrackedDataAsCookie() {
  const value = window.btoa(JSON.stringify(trackedData));
  document.cookie = "trackedData=" + value;
}

function getTrackedDataFromCookie() {
  const ca = document.cookie.split(';');
  
  const name = "trackedData=";
  let value = "";
  for(var i = 0; i < ca.length; i++) {
    var c = ca[i];
    while (c.charAt(0) == ' ') {
      c = c.substring(1);
    }
    
    if (c.indexOf(name) == 0) {
      value = window.atob(c.substring(name.length, c.length));
      break;
    }
  }

  if (value.length > 0) {
    const cookieData = JSON.parse(value);
    if (cookieData.Version === curVersion) {
      trackedData = cookieData;
      console.log(trackedData);
    }
  }
}

function updateDownloadLink() {
  const link = document.getElementById("saveChar");
  const jsonStr = JSON.stringify(trackedData);
  saveData = window.btoa(unescape(encodeURIComponent(jsonStr)));
  const file = new Blob([saveData], {type: 'text/plain'});
  link.href = URL.createObjectURL(file);
  link.download = 'wegorpg_character';
}

function saveOnlineData() {
  const charUrl = $("#charUrl").val();
  const authKey = $("#authKey").val();
  
  if (!charUrl || charUrl.length < 3) {
    alert("Invalid Character URL");
    return;
  }

  if (!authKey || authKey.length < 1) {
    alert("Invalid Auth Key");
    return;
  }

  $("#saveCharOnline").prop("disabled", true);
  $("#saveCharOnline").html("Saving..");
  $("#savedCharLink").html("");
  $.ajax({
    method: "POST",
    url: "https://wgrpg.herokuapp.com/char",
    data: '{"id":"' + charUrl + '","data":"' + saveData + '","authKey":"' + authKey + '"}'
  })
  .done(function(result){
    console.log(result);
    try {
      const parsedRes = JSON.parse(result);
      if (!!parsedRes.success) {
        const url = window.location.origin + "/?c=" + charUrl;
        $("#savedCharLink").html('<a href="' + url + '" target="_blank">' + url + '</a>');
      }
    }
    catch (e) {
      alert("Invalid response from server");
    }
  })
  .always(function(){
    $("#saveCharOnline").prop("disabled", false);
    $("#saveCharOnline").html("Save");
  });
}

function loadData(data) {
  try {
    const dataParsed = JSON.parse(data);
    if (!!dataParsed && dataParsed.hasOwnProperty("success") && !dataParsed.success) {
      alert("Failed: " + dataParsed.error);
      return;
    }
  } catch(e) {}

  let atobValue = "";
  try {
    atobValue = window.atob(data);
  }
  catch(e) {
    alert("Invalid content");
    return;
  }
  
  let value = atobValue;
  try {
    value = decodeURIComponent(escape(atobValue));
    // Parse here just to make sure it s valid
    const testParsed = JSON.parse(value);
    const testVersion = testParsed.Version;
  }
  catch(e) {
    value = atobValue;
  }
  
  if (value !== "") {
    try {
      const parsedData = JSON.parse(value);
      console.log(parsedData);
      migrateTrackedData(parsedData)
      buildFromData();
    }
    catch(e) {
      alert("Invalid content");
    }
  }
  else {
    alert("Invalid content");
  }
}

function loadFile() {
  const selectedFile = document.getElementById("uploadInput").files[0];
  if (selectedFile && selectedFile.size > 0) {
    const reader = new FileReader();
    reader.readAsText(selectedFile, "UTF-8");
    reader.onload = function (evt) {
      loadData(evt.target.result);
    }
    reader.onerror = function (evt) {
      alert("Could not read file");
    }
  }
  else {
    alert("Invalid or empty file");
  }
  
}

function onTrackedDataChange(key, value) {
  trackedData[key] = value;
  console.log(trackedData);
  //setTrackedDataAsCookie();
  updateDownloadLink();
  calculatePoints();
  
  if (key === "PersonalityData") {
    checkSelectedAbilities();
  }
  else if (key === "CharImgUrl") {
    placeImage();
  }
  else if (key === "CharMaxPoints") {
    $("#maxPoints").html(trackedData.CharMaxPoints);
  }
  else if (key === "States") {
    buildStates();
  }
}

function buildFromData() {
  fillInitialItems();
  placeImage();

  fillCustomizations();

  buildPersonalityControls("#personalityForm");
  bindPersonalityEvents();

  fillFlaws();
  buildFlawControls();
  bindFlawEvents();

  fillDnaSkills();

  fillSelectedAbilities();
  fillAbilities();
  
  fillMotives();

  fillItems();

  buildStates();
  
  updateDownloadLink();
  calculatePoints();

  $("#loadingOverlay").show();
  showPage(currentPage, function() {
    $("#loadingOverlay").hide();
  });
}

function checkOnlineSaveInput() {
  let isValid = true;

  const regex = new RegExp("^[a-z0-9]+$", "i");
  const charUrl = $("#charUrl").val();
  if (regex.test(charUrl) && charUrl.length > 2) {
    $("#charUrl").removeClass("is-invalid");
  }
  else {
    $("#charUrl").addClass("is-invalid");
    isValid = false;
  }

  const authKey = $("#authKey").val();
  if (authKey.length > 0) {
    $("#authKey").removeClass("is-invalid");
  }
  else {
    $("#authKey").addClass("is-invalid");
    isValid = false;
  }

  $("#saveCharOnline").prop("disabled", !isValid);
}

function initialSetup(shouldFillPersData) {
  for (let i = 1; i <= pageCount; i++) {
    $( "#link" + i ).click(function() {
      showPage(i);
    });
  }

  if (shouldFillPersData) {
    fillPersonalityTrackedData();
  }

  //getTrackedDataFromCookie();
  
  buildFromData();
  bindSkillEvents();
  fillDnaSkillOptions(0);
  buildStates();
  
  $('.ability-options').toggle();
  
  $("select.tracked-data").change(function() {
    const index = $(this).prop("selectedIndex");
    const key = $(this).data("sdtarget");
    onTrackedDataChange(key, index);
  });
  
  $("input[type=text].tracked-data").change(function() {
    const value = $(this).val();
    const key = $(this).data("sdtarget");
    onTrackedDataChange(key, value);
  });
  
  $("input[type=number].tracked-data").change(function() {
    const value = parseInt($(this).val());
    const key = $(this).data("sdtarget");
    onTrackedDataChange(key, value);
  });
  
  $("textarea.tracked-data").change(function() {
    const value = $(this).val();
    const key = $(this).data("sdtarget");
    onTrackedDataChange(key, value);
  });

  $("#addItembutton").click(function() {
    const name = $("#itemName").val();
    const desc = $("#itemDesc").val();
    addItem(name, desc);
  });

  $("#uploadFile").click(function() {
    loadFile();
  });

  $("#mcsExtBio").hide();
  $("#bioSwitchLink").click(function() {
    const cur = $(this).html();
    if (cur === "More..") {
      $("#mcsBio").hide();
      $("#mcsExtBio").show();
      $(this).html("Less..");
    }
    else {
      $("#mcsBio").show();
      $("#mcsExtBio").hide();
      $(this).html("More..");
    }
  });
  
  $("#saveCharOnline").click(function() {
    saveOnlineData();
  });

  $("#charUrl").on('input', function() {
    checkOnlineSaveInput();
  });

  $("#authKey").on('input', function() {
    checkOnlineSaveInput();
  });

  for (let i = 0; i < 3; i++) {
    $("#decreaseState" + i).click(function() {
      onStateChanged(i, -1);
    });
  
    $("#inreaseState" + i).click(function() {
      onStateChanged(i, 1);
    });
  }

  checkOnlineSaveInput();
}

$(document).ready(function() {
  console.log(window.location);

  const urlParams = new URLSearchParams(window.location.search);
  const charId = urlParams.has("c") ? urlParams.get("c") : "";
  if (!!charId && charId.length > 0) {
    $("#charUrl").val(charId);

    $.ajax({
      url: "https://wgrpg.herokuapp.com/char/" + charId
    })
    .done(function(result){
      console.log(result);
      loadData(result);
      currentPage = pageCount;
      initialSetup(false);
    });
  }
  else {
    initialSetup(true);
  }
  
});